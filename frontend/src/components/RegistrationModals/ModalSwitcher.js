import {useState} from "react";
import Backdrop from "../../UI/Backdrop";
import SignInModal from "./SignInModal";
import SignUpModal from "./SignUpModal";

const ModalSwitcher = (props) => {
    const[currentModal, setCurrentModal] = useState('modalSignIn')

    const openSignUpModal = () => {
        setCurrentModal('modalSignUp')
    }

    const openSignInModal = () => {
        setCurrentModal('modalSignIn')
    }

    return <Backdrop>
        {currentModal === 'modalSignIn' && (<SignInModal/>)}
        {currentModal === 'modalSignUp' && (<SignUpModal/>)}
    </Backdrop>
}

export default ModalSwitcher