// ✅ 用 query 获取当前用户 profile
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { getCurrentUserProfile, updateProfile, updatePassword, verifyOldPassword } from "@/lib/api/profile";
import toast from "react-hot-toast";

export const useUserProfile = () => {
  return useQuery({
    queryKey: ["userProfile"],
    queryFn: getCurrentUserProfile,
    retry: false, // 避免无限重试
  });
};

// ✅ 更新 profile 用 mutation
export const useUpdateProfile = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: updateProfile,
    onSuccess: () => {
      // 更新成功后，刷新 userProfile 缓存
      queryClient.invalidateQueries({ queryKey: ["userProfile"] });
      toast.success('Update Successful')
    },
  });
};

// ✅ 更新密码（不需要刷新 profile）
export const useUpdatePassword = () => {
  return useMutation({
    mutationFn: updatePassword
  });
};

export const useVerifyOldPassword = () => {
  return useMutation({
    mutationFn: ({ email, oldPassword }: { email: string; oldPassword: string }) =>
      verifyOldPassword(email, oldPassword),
  });
};