'use client';
import {Button, Table, TableBody, TableCell, TableColumn, TableHeader, TableRow, Textarea} from "@heroui/react";
import {Controller, useForm} from "react-hook-form";

const CustomerFeedback = () => {
  const {control, handleSubmit} = useForm();

  const categories = [
    {
      category: 'Overall Satisfaction',
      metric: 'Customer satisfaction rating',
    },
    {
      category: 'Product Quality',
      metric: 'Product quality satisfaction',
    },
    {
      category: 'Customer Service',
      metric: 'Responsiveness and attitude',
    },
    {
      category: 'Pricing',
      metric: 'Value for money',
    },
    {
      category: 'Ease of Use',
      metric: 'Ease of navigation (website/app)',
    },
    {
      category: 'Loyalty',
      metric: 'Likelihood to recommend',
    },
    {
      category: 'Complaint Resolution',
      metric: 'Effectiveness of issue handling',
    },
  ];

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className='max-w-3xl mx-auto bg-white'>
      <div className="flex flex-col bg-gray-900 screen-height overflow-y-auto">
        <div className="pt-16 pb-12 text-grey text-grey-lighten-2">
          <div className="container max-w-xl mx-auto px-8">
            <img src="/assets/images/ileyah logo white.png" alt="logo" width="120"/>
            <h1 className="mt-10 text-white max-w-[350px] line-height-1.2" style={{fontSize: "1.5rem"}}>
              Customer Satisfaction Survey (CSS) Report
            </h1>
          </div>
        </div>
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <Table aria-label="Customer Satisfaction Survey">
          <TableHeader>
            <TableColumn>Category</TableColumn>
            <TableColumn>Metrics Evaluated</TableColumn>
            <TableColumn>Score/Percentage</TableColumn>
            <TableColumn>Recommendation / Observation</TableColumn>
          </TableHeader>
          <TableBody>
            {categories.map((item, index) => (
              <TableRow key={index}>
                <TableCell>{item.category}</TableCell>
                <TableCell>{item.metric}</TableCell>
                <TableCell>
                  <Controller
                    name={`scoreObservation.${index}`}
                    control={control}
                    defaultValue=""
                    render={({field}) => (
                      <Textarea
                        {...field}
                        placeholder=""
                        className='border border-gray-300 rounded-xl'
                      />
                    )}
                  />
                </TableCell>
                <TableCell>
                  <Controller
                    name={`recommendation.${index}`}
                    control={control}
                    defaultValue=""
                    render={({field}) => (
                      <Textarea
                        {...field}
                        placeholder=""
                        className='border border-gray-300 rounded-xl'
                      />
                    )}
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <div>
          <Button type="submit" className='bg-black text-white'>
            Submit
          </Button>
        </div>
      </form>
    </div>
  )
}

export default CustomerFeedback;