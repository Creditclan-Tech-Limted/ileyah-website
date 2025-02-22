import {parseJsonString} from "@/lib/utils.js";
import http from "@/lib/http";
import {useMutation, useQuery} from "@tanstack/react-query";

// https://wema.creditclan.com/api/v3/rent/register
export const useSignUpMutation = () => {
  const {mutate, mutateAsync, isLoading} = useMutation((payload) => {
    return http.post(
      "https://wema.creditclan.com/api/v3/rent/register",
      payload
    );
  });
  return {mutate, mutateAsync, isLoading};
};

export const useLoginMutation = () => {
  const {mutate, mutateAsync, isLoading} = useMutation((payload) => {
    return http.post("https://wema.creditclan.com/api/v3/rent/login", payload);
  });
  return {mutate, mutateAsync, isLoading};
};

export const useCreateIleyahLoan = () => {
  const {mutate, mutateAsync, isLoading} = useMutation((payload) => {
    return http.post("lendnode.creditclan.com/kuda/agents/createLoan", payload);
  });
  return {mutate, mutateAsync, isLoading};
};

export const useCreateRentRequestMutation = () => {
  const {mutate, mutateAsync, isLoading} = useMutation((payload) => {
    return http.post(
      "https://wema.creditclan.com/rent/create/request",
      payload
    );
  });
  return {mutate, mutateAsync, isLoading};
};

export const useCheckUserMutation = () => {
  const {mutate, mutateAsync, isLoading} = useMutation((payload) => {
    return http.post("https://wasapnodeserver.herokuapp.com/user", payload);
  });
  return {mutate, mutateAsync, isLoading};
};

export const useFindMeHouseMutation = () => {
  const {mutate, mutateAsync, isLoading} = useMutation((payload) => {
    return http.post(
      "https://wasapnodeserver.herokuapp.com/findMeHouseRequest",
      payload
    );
  });
  return {mutate, mutateAsync, isLoading};
};

export const useCheckRentRequestQuery = (phone, onSettled) => {
  const {data, isLoading, refetch, isFetching} = useQuery(
    ["request", phone],
    () => {
      return http.post("https://wema.creditclan.com/rent/pending/request", {
        phone,
      });
    },
    {enabled: !!phone, onSettled, cacheTime: 0}
  );
  const request = data?.data?.request ?? null;
  if (request)
    request.payload = parseJsonString(request.payload) || request.payload;
  return {request, isLoading, refetch, isFetching};
};

export const useCheckRentRequestMutation = ({phone}) => {
  return useQuery({
    queryKey: ["check-rent-request"],
    queryFn: async () => {
      const {data} = await http.post("https://wema.creditclan.com/rent/pending/request", {
        phone,
      });
      const request = data?.request ?? null;
      if (request) request.payload = parseJsonString(request.payload) || request.payload;
      return request;
    },
    enabled: !!phone,
  });
};

export const useGetInspectionDetails = (payload) => {
  return useQuery({
    queryKey: ["inspections"],
    queryFn: async () => {
      const res = await http.post('https://lendnode.creditclan.com/kuda/agents/getInspections', payload);
      return res.data.data;
    },
  });
};

export const useCancelRequestMutation = () => {
  const {mutate, mutateAsync, isLoading} = useMutation((phone) => {
    return http.post("https://wema.creditclan.com/rent/cancel/request", {
      phone,
    });
  });
  return {mutate, mutateAsync, isLoading};
};

export const useCancelCcRequestMutation = () => {
  const {mutate, mutateAsync, isLoading} = useMutation((request_id) => {
    return http.post(
      "https://mobile.creditclan.com/api/v3/cancel/loan_request",
      {request_id},
      {
        headers: {
          "x-api-key":
            "WE4mwadGYqf0jv1ZkdFv1LNPMpZHuuzoDDiJpQQqaes3PzB7xlYhe8oHbxm6J228",
        },
      }
    );
  });
  return {mutate, mutateAsync, isLoading};
};

export const useUploadImageMutation = () => {
  const {mutate, mutateAsync, isLoading} = useMutation((file) => {
    const fd = new FormData();
    fd.append("file", file, "avatar.png");
    return http.post("https://mobile.creditclan.com/api/v3/upload/image", fd, {
      headers: {
        "x-api-key":
          "WE4mwadGYqf0jv1ZkdFv1LNPMpZHuuzoDDiJpQQqaes3PzB7xlYhe8oHbxm6J228",
      },
    });
  });
  return {mutate, mutateAsync, isLoading};
};

export const useGetLoanDetailsQuery = ({email, phone, request_id}) => {
  const {data, isLoading, refetch, isFetching} = useQuery(
    ["loan", request_id],
    async () => {
      const {data} = await http.post(
        "https://mobile.creditclan.com/api/v3/customer/check/details",
        {email, phone},
        {
          headers: {
            "x-api-key":
              "WE4mwadGYqf0jv1ZkdFv1LNPMpZHuuzoDDiJpQQqaes3PzB7xlYhe8oHbxm6J228",
          },
        }
      );
      const {token} = data;
      const res = await http.post(
        "https://mobile.creditclan.com/api/v3/loan/details",
        {token, request_id},
        {
          headers: {
            "x-api-key":
              "WE4mwadGYqf0jv1ZkdFv1LNPMpZHuuzoDDiJpQQqaes3PzB7xlYhe8oHbxm6J228",
          },
        }
      );
      return res.data.data;
    },
    {enabled: !!request_id}
  );
  return {data, isLoading, refetch, isFetching};
};

export const useGetPlansQuery = ({price}) => {
  const {data, isLoading, refetch, isFetching} = useQuery(
    ["Rent Plans", price],
    async () => {
      const res = await http.get(
        `https://cc-eligibility-staging.herokuapp.com/misc/plans?vertical=rent&amount=${price}`
      );
      return res.data.plans;
    },
    {enabled: !!price}
  );
  return {data, isLoading, refetch, isFetching};
};

export const useGetDashboardData = () => {
  return useQuery({
    queryKey: ["dashboard"],
    queryFn: async () => {
      const res = await http.post('https://lendnode.creditclan.com/ileyah_records');
      return res.data.data;
    },
  });
}

export const useGetLoans = (payload) => {
  return useQuery({
    queryKey: ["loans"],
    queryFn: async () => {
      const res = await http.post('https://lendnode.creditclan.com/ileyah_loans', payload);
      return res.data.data;
    },
  });
}