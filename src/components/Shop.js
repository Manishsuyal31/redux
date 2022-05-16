import React from 'react'
import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import { actionCreators } from '../state/index'

const Shop = () => {
    const dispatch = useDispatch();
    const { withdrawMoney, depositMoney } = bindActionCreators(actionCreators, dispatch);
    return (
        <div className='container my-5'>
            <h2 className='d-flex justify-content-center my-3'>PAYMENT AMOUNT</h2>
            <div className='d-flex justify-content-center'>
                {/* <button className="btn btn-primary mx-3" onClick={() => (dispatch(actionCreators.withdrawMoney(100)))}> - </button>
                ADD MONEY
                <button className="btn btn-primary mx-3" onClick={() => (dispatch(actionCreators.depositMoney(100)))}> + </button> */}
                <button className="btn btn-primary mx-3" onClick={() => {withdrawMoney(100)}}> - </button>
                ADD MONEY
                <button className="btn btn-primary mx-3" onClick={() => {depositMoney(100)}}> + </button>
            </div>
        </div>
    )
}

export default Shop