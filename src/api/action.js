import { useQueryClient, useMutation, useQuery } from "@tanstack/react-query";
import http from "./http";
import axios from "axios";

export const useGetStaff = (companyId) => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["companies"],
    queryFn: () => http.post(`api/companies/getCompanyStaff`, { companyId }),
  });
  return { data, isLoading, isError };
};

export const useGetAdminProperties = () => {
  return useQuery({
    queryKey: ["properties"],
    queryFn: async () => {
      const res = await axios.get(
        `https://kuda-creditclan-api.herokuapp.com/agents/admin/properties`
        // `https://kuda-creditclan-api.herokuapp.com/agents/properties`
      );
      return res.data.data;
    },
  });
};

export const useAddStaff = () => {
  const queryClient = useQueryClient();
  const { mutate, mutateAsync, isLoading } = useMutation({
    mutationFn: ({ data, companyId }) => {
      return http.post(`api/companies/addCompanyStaff`, { ...data, companyId });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["companies"] });
    },
  });
  return { mutate, mutateAsync, isLoading };
};

export const useUpdateProperty = () => {
  const queryClient = useQueryClient();
  const { mutate, mutateAsync, isLoading } = useMutation({
    mutationFn: ( data ) => {
      return http.post(`agents/updateProperty`, { ...data });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["properties"] });
    },
  });
  return { mutate, mutateAsync, isLoading };
};
