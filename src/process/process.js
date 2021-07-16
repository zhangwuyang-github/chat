import './process.scss'
import { useSelector } from 'react-redux'

const Process = () => {
    const state = useSelector(state => state.ProcessReducer)

    return (
        <div className='process'>
            <h5>
                公钥： <span>'uI2ooxtwHeI6q69PS98fx9SWVGbpQohO'</span>
            </h5>
            <div className='incoming'>
                <h4>正在输入...</h4>
                <p>{state.cypher}</p>
            </div>
            <div className='crypt'>
                <h4>正在输入...</h4>
                <p>{state.text}</p>
            </div>
        </div>
    )
}

export default Process
