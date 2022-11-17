import { useDispatch } from 'react-redux'
import { BASEURL } from '../../config/baseURl'
import { AUTH_ROUTES } from '../../routes/auth.routes'
import { updateUser } from '../../store/slices/userLogin'

export type UserProps = {
    firstname: string;
    lastname: string;
    login: string;
    password: string;
}
export type LoginUserCreateParams = {
    user: UserProps
}
export type ReponseUserCreate = {
    firstname: string;
    lastname: string;
    login: string;
    password: string;
    refresh: string;
    disabledAt: null;
    _id: string;
    createdAt: string;
    updatedAt: string;
    __v: number
}
export type ResponseApi<T> = {
    success: true;
    statusCode: 200;
    message: string;
    object: T
}
export const LoginUserFunction = async ({user}: LoginUserCreateParams) => {
    // const dispatch = useDispatch()
    const create = {
        firstname: user.firstname,
        lastname: user.lastname,
        login: user.login,
        password: user.password
    }
    try {
        const data = await fetch(`${BASEURL}${AUTH_ROUTES.NEW_AUTH()}`, {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(create)
        })
        const response: ResponseApi<ReponseUserCreate> = await data.json()
        return response
    } catch (error) {
        console.log('error')
    }

}