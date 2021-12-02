//3. Consumer bước 3 ở đây
import { useContext } from 'react'
import {ThemeContext} from './index'
//4. Gọi useContext() để sài thôi . tạo ra thì lấy ra sài
//5. Nhét cái vừa khởi tạo vào công cụ sài ( useContext)
function ComC() {
    const name = useContext(ThemeContext)
    return (
        <div>
            Toi can hien :  {name}
        </div>
    )
}

export default ComC
