import Drawer from '@/components/Drawer'
import Button from '@/components/global/Button'
import Checkbox from '@/global/Checkbox'
import { formatCurrency } from '@/lib/utils'
import { useEffect, useState } from 'react'

const MakePayment = ({ isOpen, onClose, recoveryFilter, recovery }) => {
  const [pay, setPay] = useState('')
  const [nextPayment, setNextPayment] = useState(false);
  const [clearLoan, setClearLoan] = useState(false)

  const setPayment = async (amount, source) => {
    try {
      if (source === 'clear') {
        if (!clearLoan) {
          let newAmount = +pay + +amount;
          setPay(newAmount)
          setClearLoan(true);
          setNextPayment(false)
        } else {
          let newAmount = +pay - +amount;
          setPay(newAmount)
          setClearLoan(false)
          setNextPayment(false)
        }
      } else {
        if (!nextPayment) {
          let newAmount = +pay + +amount;
          setPay(newAmount)
          setNextPayment(true)
        } else {
          let newAmount = +pay - +amount;
          setPay(newAmount)
          setNextPayment(false)
        }
      }
    } catch (error) {
      console.log({ error });
    }
  }

  useEffect(() => {
    setPay(+recoveryFilter?.nextPayment.toFixed(2))
  }, [])

  console.log({pay});

  return (
    <>
      <Drawer isOpen={isOpen} onClose={onClose} title={'Make Payment'}>
        {
          recoveryFilter?.overdueBalances.length > 0 ?
            <>
              <p>You have an overdue Payment</p>
              <p>Kindly make a transfer to your repayment account below</p>
              <hr className='mt-4 h-1 bg-slate-300' />
              <div className='mt-5 space-y-4'>
                <div className="flex justify-between">
                  <Checkbox checked disabled label='Gym' children={`Overdue / Outstanding Balance`} />
                  <div>{formatCurrency(recoveryFilter?.nextPayment)}</div>
                </div>
                <div className="flex justify-between">
                  <Checkbox checked={nextPayment} onChange={() => setPayment(recoveryFilter?.nextMonth?.how_much_remaining, 'normal')} children={`Next Payment`} />
                  <div>{formatCurrency(recoveryFilter?.nextMonth?.how_much_remaining)}</div>
                </div>
                <div className="flex justify-between">
                  <Checkbox checked={clearLoan} children={`Clear Loan`} onChange={() => setPayment(recoveryFilter?.nextTillEndTotal, 'clear')} />
                  <div>{formatCurrency(recoveryFilter?.nextTillEndTotal)}</div>
                </div>
              </div>
              <div class="border-gray-300 rounded-2xl border-2 divide-y mt-5">
                <p class="flex justify-between p-3">
                  <div>Next Repayment Due:</div>
                  <div>{(recoveryFilter?.nextMonth?.repayment_date)}</div>
                </p>
                <p class="flex justify-between p-3">
                  <div>Account Number:</div>
                  <div>{recovery?.customer?.account_number}</div>
                </p>
                <p class="flex justify-between p-3">
                  <div>Bank:</div>
                  <div>WEMA</div>
                </p>
              </div>
              <div className='mt-5 space-x-5'>
                <Button> Pay {formatCurrency(pay) || recoveryFilter?.nextPayment }</Button>
                <Button variant='outlined'> Clear Loan</Button>
              </div>
            </>
            :
            <>
              <p>Next repayment </p>
              <p>Kindly make a transfer to your repayment account below</p>
              <div class="border-gray-300 rounded-2xl border-2 divide-y mt-5">
                <p class="flex justify-between p-3">
                  <div>Next Repayment:</div>
                  <div>{formatCurrency(recoveryFilter?.nextPayment)}</div>
                </p>
                <p class="flex justify-between p-3">
                  <div>Account Number:</div>
                  <div>{recovery?.customer?.account_number}</div>
                </p>
                <p class="flex justify-between p-3">
                  <div>Bank:</div>
                  <div>WEMA</div>
                </p>
              </div>
              <div className='mt-5'>
                <Button>Confirm Payment</Button>
              </div>
            </>
        }
      </Drawer>
    </>
  )
}

export default MakePayment