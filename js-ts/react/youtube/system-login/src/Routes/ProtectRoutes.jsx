import { Routering } from './routes'
import { UserServices } from "../Services/UserService";

const userService = new UserServices()

export const ProtectedRoutes = ({children}) => {
  const usuarioAutenticado = userService.usuarioAutenticado()
  return usuarioAutenticado ? children : <Routering />
}