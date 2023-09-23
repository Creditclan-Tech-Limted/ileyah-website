'use client'
import { UPLOAD_IMAGE } from '@/api/landlord';
import { useGetLoanDetailsQuery } from '@/api/rent';
import Drawer from '@/components/Drawer';
import Button from '@/components/global/Button';
import Input from '@/global/Input';
import Loader from '@/global/Loader';
import Select from '@/global/Select';
import SimpleDropdown from '@/global/SimpleDropdown';
import { useToast } from '@/lib/use-toast';
import { banks } from '@/lib/utils';
import useSignupStore from '@/store/signup';
import { IconChevronDown, IconLogout } from '@tabler/icons-react';
import axios from 'axios';
import classNames from 'classnames';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';

const CheckOffers = ({ className, isOpen, onClose }) => {
  const toast = useToast();
  const router = useRouter();
  const { data, updateData } = useSignupStore((state) => state);
  const [image, setImage] = useState("");
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [loading, setLoading] = useState(false);
  const [views, setViews] = useState('inspections');
  const [offers, setOffers] = useState();
  const [isOfferLoading, setIsOfferLoading] = useState('show');

  const onChange = (e) => {
    let files;
    if (e.dataTransfer) {
      files = e.dataTransfer.files;
    } else if (e.target) {
      files = e.target.files;
    }
    const reader = new FileReader();
    reader.onload = () => {
      setImage(reader.result);
    };
    reader.readAsDataURL(files[0]);
  };

  const checkOffers = async () => {
    try {
      setLoading(true);
      setViews('view-result');
      setIsOfferLoading('show-offer-loading');
      const res = await axios.post('https://mobile.creditclan.com/api/v3/schoolportal/offers', {
        request_id: data?.user?.lend_loan_id, token: data?.user?.lend_token
      }, {
        headers: {
          'x-api-key': 'WE4mwadGYqf0jv1ZkdFv1LNPMpZHuuzoDDiJpQQqaes3PzB7xlYhe8oHbxm6J228'
        }
      })
      setOffers(res?.data?.payload)
      updateData({ ...data, user: { ...data?.user, credit_score: res?.data?.payload?.repayment_amount?.toFixed(2) } });
      setLoading(false);
      setViews('view-result');
      setIsOfferLoading('show-offer-done');
      router.push('/listings')
      await axios.post('https://kuda-creditclan-api.herokuapp.com/agents/updateAgents', { id: data?.user?.id, analysis_step: 'completed', credit_score: res?.data?.payload.repayment_amount?.toFixed(2) })
    } catch (error) {
      setLoading(false)
      console.log({ error });
    }
  }

  const CreateLoan = async (card) => {
    let url = `https://mobile.creditclan.com/api/v3/loan/apply`;
    return new Promise((resolve) => {
      try {
        const payload = {
          request: {
            amount: 5000000,
            tenor: 12,
            tenor_type: 2,
            product_id: 29942
          },
          profile: {
            full_name: data?.user?.name,
            email: data?.user?.email,
            user_id: card?.user_id,
            profile_image: '',
            phone: card?.phone,
          },
          work: {},
          home_address: {},
          account: "",
          extra: {},
          request_type: "ileyah"
        };
        axios
          .post(url, payload, {
            headers: {
              'x-api-key': 'WE4mwadGYqf0jv1ZkdFv1LNPMpZHuuzoDDiJpQQqaes3PzB7xlYhe8oHbxm6J228'
            }
          })
          .then(async (response) => {
            resolve(response.data);
          })
          .catch((err) => {
            console.log(err);
            resolve(err)
          });
      } catch (error) {
        console.log(error);
      }
    });
  }

  const CreateUserDefault = async (card) => {
    const { email, phone } = data?.user
    try {
      let url = `https://mobile.creditclan.com/api/v3/customer/register/user`;
      let body = {
        profile: {
          full_name: data?.user?.name,
          email: data?.user?.email ? data?.user?.email : `${data?.user?.phone + new Date().getTime()}@gmail.com`,
          phone: data?.user?.phone,
          password: "temp",
          is_individual: 1,
          bvn: card?.bvn
        },
      };
      const res = await axios.post(url, body, {
        headers: {
          'x-api-key': 'WE4mwadGYqf0jv1ZkdFv1LNPMpZHuuzoDDiJpQQqaes3PzB7xlYhe8oHbxm6J228'
        }
      })

      if (!res?.data?.status && res?.data?.message.includes('You seem to already have an account with us. Please login instead')) {
        const { data } = await axios.post('https://mobile.creditclan.com/api/v3/customer/check/details', { email, phone }, {
          headers: { 'x-api-key': 'WE4mwadGYqf0jv1ZkdFv1LNPMpZHuuzoDDiJpQQqaes3PzB7xlYhe8oHbxm6J228' }
        });
        const { token, user_id } = data;
        return data;
      } else {
        return res?.data
      }
    } catch (error) {
      console.log({ error });
    }
  }

  const uploadImage = async () => {
    try {
      const response = await axios.post(
        UPLOAD_IMAGE.UPLOAD(),
        { file: image },
        {
          headers: {
            'x-api-key':
              'WE4mwadGYqf0jv1ZkdFv1LNPMpZHuuzoDDiJpQQqaes3PzB7xlYhe8oHbxm6J228',
          },
        }
      )
      return response.data.data.filename
    } catch (error) {
      console.error('Error with Axios request:', error)
      setLoading(false)
      return null
    }
  }

  const analyzeBS = async (res, resi, values) => {
    try {
      const file_url = await uploadImage()
      const response = await axios.post('https://wasapnodeserver.herokuapp.com/analyze', { password: '', file_url, name: data?.user?.name, token: res?.token, bank_id: values?.bank, request_id: resi?.dd, statement_bank: 'other' })
      if (response?.data?.status) {
        return response?.data
      } else if (!response?.data?.status && response?.data?.message.includes("*Sorry, this statement belongs to someone else* \n\nPlease upload your bankstatement pdf here and ensure it belongs to your company and in frequent use "
      )) {
        toast.error(response?.data?.message);
      }
    } catch (error) {
      console.log({ error });
    }
  }

  const updateUserRecord = async (res, resi, values) => {
    try {
      const response = await axios.post('https://kuda-creditclan-api.herokuapp.com/agents/updateAgents', { lend_user_id: res?.user_id, lend_token: res?.token, lend_loan_id: resi?.dd, id: data?.user?.id, analysed: true, analysis_step: 'processing' })
    } catch (error) {
      console.log({ error });
    }
  }

  const onSubmit = async (values) => {
    setLoading(true)
    try {
      const res = await CreateUserDefault(values);
      const resi = await CreateLoan(res);
      const analyze = await analyzeBS(res, resi, values);
      if (analyze?.status) {
        toast.success('Uplaod Successful, BS Analysing')
      }
      await updateUserRecord(res, resi, values);
      setLoading(false)
      setViews('view-result');
    } catch (error) {
      setLoading(true)
      console.log({ error });
    }
  }

  const handleLogout = () => {
    router.push('/login')
  };

  return (
    <>
      <Drawer title='Credit Check' isOpen={isOpen} onClose={onClose}>
        {views === 'view-result' && (
          <>
            <div className="border rounded-xl bg-primary-600 p-10 mt-[50px] text-white">
              <div className="flex justify-between">
                <div className='space-y-2'>
                  <p className='text-sm'> Status</p>
                  <p className='text-3xl'> 'Analysing...'</p>
                </div>
                <div className='my-auto'>
                  <Button color='white' variant='outlined' loading={loading} onClick={checkOffers} > Check </Button>
                </div>
              </div>
            </div>
          </>
        )}

        {views === 'view-result' && isOfferLoading === 'show-offer-loading' && (
          <div>
            <h3 className="text-xl font-medium mb-8 px-1 border-b pb-6 mt-[50px]">Analysis Result</h3>
            <div className="border rounded-xl p-20 mt-[50px] border-gray-300">
              <div className="flex justify-between">
                <div className="mx-auto">
                  <Loader text='Please wait...' />
                </div>
              </div>
            </div>
          </div>
        )}

        {views === 'view-result' && isOfferLoading === 'show-offer-done' && (
          <div>
            <h3 className="text-xl font-medium mb-8 px-1 border-b pb-6 mt-[50px]">Analysis Result</h3>
            <div className="border rounded-xl p-10 mt-[50px] border-gray-300">
              <div className="flex justify-between">
                <div className='space-y-2'>
                  <p className='text-2xl'>Offer</p>
                </div>
                <div className='my-auto'>
                  <p className='text-2xl'> {offers?.repayment_amount?.toFixed(2)} / mo</p>
                </div>
              </div>
            </div>
          </div>
        )}

        <>
          {views === 'inspections' && (
            <>
              <div className="bg-red-600 p-10 rounded-xl text-white">
                <p className='text-2xl font-semibold'>Why Check your Credit Score?</p>
                <div className='mt-5'>
                  <div className='space-y-4'>
                    <li>Lorem ipsum ddivor sit, amet consectetur adipisicing elit. Facere, quia vdivuptate nesciunt iste veritatis ddivorum maiores praesentium provident ndivla quis!</li>
                  </div>
                </div>
              </div>
              <h3 className="text-xl font-medium mb-8 px-1 border-b pt-10 pb-6">Please fill in the informtion below</h3>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="space-y-6 mb-10">
                  <div className="grid grid-cols-1 gap-6">
                    <Select
                      options={banks} label='Please select bank' bordered
                      {...register('bank', {
                        required: {
                          value: true,
                          message: 'Bank is required'
                        }
                      })}
                      error={errors?.bank?.message}
                    />
                  </div>
                </div>
                <div className="flex items-center justify-between border border-gray-300 rounded-3xl px-6 py-6">
                  <p className="text-cc-dark max-w-xs">
                    Kindly Upload your bank Statement
                  </p>
                  <div>
                    <div className="flex items-center">
                      <label
                        className="border-2 border-gray-300 border-dashed w-[150px] h-[150px] rounded-2xl flex justify-center items-center hover:bg-gray-100 cursor-pointer relative"
                      >
                        <input
                          type="file" accept='.pdf' className="w-[1px] h-[1px] absolute top-0 left-0" onChange={onChange}
                        />
                        {
                          !!data?.houseImage?.picture ? (
                            <img
                              src={data?.houseImage?.picture} alt="user"
                              className="absolute inset-0 w-full h-full bg-cover bg-center rounded-2xl"
                            />
                          ) : (
                            <i className="fa-solid fa-plus fa-2x opacity-75"></i>
                          )
                        }
                      </label>
                    </div>
                  </div>
                </div>
                <Button className='mt-10' type='submit' loading={loading}>Submit</Button>
              </form>
            </>
          )}
        </>
      </Drawer>
    </>
  )
}

export default CheckOffers;