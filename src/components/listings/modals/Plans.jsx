import Drawer from "@/components/Drawer"
import Button from "@/components/global/Button";
import { useToast } from "@/lib/use-toast";
import { IconBath, IconBulb, IconBus, IconChevronRight, IconHeadset, IconListNumbers, IconPaint, IconPalette, IconPlus, IconTriangleInverted } from "@tabler/icons-react";
import classNames from "classnames";
import { useRouter } from "next/navigation";

const artisans = [
  {
    name: 'Cleaning Services',
    icon: <IconBath size="20" />,
    desc: 'Cleaning companies offer deep cleaning services to ensure the apartment is spotless before moving in.',
    bg_color: 'bg-red-600'
  },
  {
    name: 'Plumbing Services',
    icon: <IconPaint size="20" />,
    desc: 'Plumbers can handle installation and repairs of plumbing fixtures, such as sinks, faucets, and toilets.',
    bg_color: 'bg-blue-600'
  },
  {
    name: 'Painting Services',
    icon: <IconPaint size="20" />,
    desc: 'Professional painters can refresh the interior or exterior of the apartment with a fresh coat of paint.',
    bg_color: 'bg-green-600'
  },
  {
    name: 'Electrical Services',
    icon: <IconBulb size="20" />,
    desc: 'Electricians can install or repair electrical fixtures, outlets, and wiring to ensure safety and functionality.',
    bg_color: 'bg-purple-600'
  },
  {
    name: 'Moving Services',
    icon: <IconBus size="20" />,
    desc: 'Professional movers can help with packing, loading, transportation, and unpacking your belongings..',
    bg_color: 'bg-yellow-600'
  },
  {
    name: 'Carpentry Services',
    icon: <IconTriangleInverted size="20" />,
    desc: 'Carpenters can assist with furniture assembly, repairs, and custom furniture projects',
    bg_color: 'bg-teal-600'
  },
  {
    name: 'Interior Design Services',
    icon: <IconPalette size="20" />,
    desc: 'Interior designers can assist with space planning, furniture selection, and creating a personalized living space.',
    bg_color: 'bg-black'
  }
]

const Plans = ({ isOpen, onClose }) => {
  const array = [];
  const toast = useToast();
  const router = useRouter();

  const add = async (item) => {
    try {
      toast.success(`${item?.name} has been added`)
      array.push(item?.name)
      console.log(array);
    } catch (error) {
      console.log(error);
    }
  }

  const signUp = async () => {
    try {
      const ileyah_token = JSON.parse(localStorage.getItem(('ileyah_token')));
      console.log(ileyah_token);
      if (ileyah_token) {
        if (data?.user?.credit_score) {
          return onNext();
        }
        updateData({ user: ileyah_token, property })
        return router.push(`/dashboard`);
      } else {
        return router.push(`/register`)
      }
    } catch (error) {
      console.log({ error });
    }
  }
  
  return (
    <>
      <Drawer isOpen={isOpen} onClose={onClose} title='Subscriptions Plans'>
        <p>Please select the subs you want to add to your plans</p>
        <div className='mt-5 space-y-5'>
          {artisans.map((item, index) => (
            <div className="rounded-2xl flex justify-between items-center border border-gray-300 px-7 py-5 cursor-pointer hover:bg-gray-100">
              <div className="flex">
                <div className="flex">
                  <div className={classNames("w-10 h-10 rounded-full text-white grid place-items-center my-auto", item?.bg_color)}>
                    {item?.icon}
                  </div>
                </div>
                <div className="px-6">
                  <p className="text-lg font-medium text-left">
                    {item?.name}
                  </p>
                  <p className="text-left mt-0.5 opacity-75 text-[.95rem] leading-snug">
                    - {item?.desc} <br />
                  </p>
                </div>
              </div>
              <div onClick={() => add(item)}>
                <IconPlus className="text-black ml-auto border border-gray-400 rounded-full p-1" size="20" />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10">
          <Button onClick={signUp} >Continue</Button>
        </div>

      </Drawer>
    </>
  )
}

export default Plans;