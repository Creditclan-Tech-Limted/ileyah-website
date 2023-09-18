import { useQueryClient, useMutation, useQuery } from '@tanstack/react-query'
import http from './http'

export const useGetStaff = (companyId) => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ['companies'],
    queryFn: () => http.post(`/companies/getCompanyStaff`, { companyId }),
  })
  return { data, isLoading, isError }
}

export const useAddStaff = () => {
  const queryClient = useQueryClient()
  const { mutate, mutateAsync, isLoading } = useMutation({
    mutationFn: ({ data, companyId }) => {
      return http.post(`/companies/addCompanyStaff`, { ...data, companyId })
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['companies'] })
    },
  })
  return { mutate, mutateAsync, isLoading }
}

// export const usePublishJob = () => {
//   return useMutation((id) => {
//     return http.put(`/publish/${id}`)
//   })
// }

// export const useDeleteJob = () => {
//   return useMutation((id) => {
//     return http.delete(`/delete/${id}`)
//   })
// }

// export const useUpdateJob = () => {
//   return useMutation(({ id, data }) => {
//     return http.put(`/update/${id}`, data)
//   })
// }
