import type { LoginResult } from "@/types/member"
import { http } from "@/utils/http"
import type { Ref } from "vue"

export const postLoginWxMinSimpleAPI = (key: Ref<string>, password: Ref<string>) => {
  return http<LoginResult>({
    method: 'POST',
    url: 'http://111.231.60.148:8998/uniapp/user/login',
    data: {
      key,
      password
    }
  })
}
