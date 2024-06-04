'use client'
import Button from "@/components/global/Button";
import SimpleDropdown from "@/global/SimpleDropdown";
import { IconChevronDown, IconLogout } from "@tabler/icons-react";
import axios from "axios";
import classNames from "classnames";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const AdminInspections = ({className}) => {
  const [users, setUsers] = useState([]);
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const getAllUser = async () => {
    try {
      const res = await axios.post(
        "https://kuda-creditclan-api.herokuapp.com/agents/getAdminInspections", {}
      );
      console.log(res.data.data);
      setUsers(res?.data?.data);
      setLoading(false);
    } catch (error) {
      console.log("error", error);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('ileyah_token');
    router.push('/login')
  };

  useEffect(() => {
    getAllUser();
  }, []);
  return (
    <div>
      <div className="flex">
        <div>
          <p className="text-2xl font-semibold">Inspeactions</p>
        </div>
        <div className="ml-auto">
          <SimpleDropdown
            trigger={
              <div className="flex items-center">
                <img
                  src={`https://ui-avatars.com/api/?name=IL`}
                  className={classNames("w-8 h-8 rounded-full", className)}
                  alt={`IL`}
                />
                <IconChevronDown size="18" className="ml-3" />
              </div>
            }
            items={[
              {
                text: "Logout",
                icon: <IconLogout size="18" />,
                onClick: handleLogout,
              },
            ]}
          />
        </div>
      </div>

      {loading && <div>loading...</div>}

      <div className="grid grid-cols-2 gap-10 mt-10">
        {
          !loading && users?.map((user, i) => (
            <div className='bg-white shadow flex rounded-2xl p-3' key={i}>
              <div className='my-auto'>
                <img src="https://cdn3d.iconscout.com/3d/premium/thumb/house-building-10868323-8726749.png?f=webp" alt="" width={100} />
              </div>
              <div className='my-auto'>
                <p className="font-bold">{user?.landlordAgent?.name}</p>
                <p>{user?.landlordAgent?.phone}</p>
                <p>{user?.property?.title}</p>
                <p>{user?.property?.area || user?.property?.Area}</p>
                <p>{user?.date} - {user?.time}</p>
                <p>{user?.landlordAgent?.createdAt.slice(0, 10)}</p>
              </div>
              <div className='my-auto ml-auto'>
                <Button variant='outlined' size='xs' className='mt-3' onClick={() => setOpenComments(true)}>Comments</Button>
              </div>
            </div>
          ))
        }
      </div>

    </div>
  );
};

export default AdminInspections;
