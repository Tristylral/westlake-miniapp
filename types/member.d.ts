export type LoginResult = {
  avatar: string
  /** 账户名 */
  username: string
  /** 昵称 */
  name?: string
  /** 性别 */
  sex?: Gender
  /** 登录凭证 */
  token: string
}

/** 个人信息 用户详情信息 */
export type ProfileDetail = {
  /** 头像 */
  avatar: string
  /** 账户名 */
  username: string
  /** 昵称 */
  name?: string
  /** 性别 */
  sex?: Gender
}


/** 个人信息 修改请求体参数 */
export type ProfileParams = {
  /** 头像 */
  avatar: string
  /** 账户名 */
  username: string
  /** 昵称 */
  name?: string
  /** 性别 */
  sex?: Gender
}


