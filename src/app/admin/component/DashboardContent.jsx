import {useGetDashboardData} from "@/api/rent";
import {Card, Skeleton} from "@heroui/react";
import {formatCurrency} from "@/lib/utils";

const DashboardContent = () => {
  const {data: dashboardData, isLoading: isGetDashboardDataLoading} = useGetDashboardData();

  return (
    <div>
      {
        isGetDashboardDataLoading ? (
          <div>
            <Card className="w-[200px] space-y-5 p-4" radius="lg">
              <Skeleton className="rounded-lg">
                <div className="h-24 rounded-lg bg-default-300" />
              </Skeleton>
              <div className="space-y-3">
                <Skeleton className="w-3/5 rounded-lg">
                  <div className="h-3 w-3/5 rounded-lg bg-default-200" />
                </Skeleton>
                <Skeleton className="w-4/5 rounded-lg">
                  <div className="h-3 w-4/5 rounded-lg bg-default-200" />
                </Skeleton>
                <Skeleton className="w-2/5 rounded-lg">
                  <div className="h-3 w-2/5 rounded-lg bg-default-300" />
                </Skeleton>
              </div>
            </Card>

          </div>
        ) : (
          <div className='grid grid-cols-3 gap-4 mt-5'>
            {Object.keys(dashboardData).map((key) => (
              <div key={key} className='flex flex-col gap-2 border border-gray-300 rounded-2xl p-4'>
                <div className='flex items-center gap-2'>
                  <div className='text-sm capitalize'>{key}</div>
                </div>
                <div className='flex items-center gap-2'>
                  <div className='text-2xl'>{formatCurrency(dashboardData[key][key])}</div>
                </div>
              </div>
            ))}
          </div>
        )
      }
    </div>
  );
};

export default DashboardContent;