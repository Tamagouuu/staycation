import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { updateSetting as updateSettingsApi } from "../../services/apiSettings";

function useUpdateSettings() {
  const queryClient = useQueryClient();
  const { mutate: updateSettings, isLoading: isUpdating } = useMutation({
    mutationFn: updateSettingsApi,

    onSuccess: () => {
      toast.success("Settings successfully updated");
      queryClient.invalidateQueries({ queryKey: ["settings"] });
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  return { updateSettings, isUpdating };
}

export default useUpdateSettings;
