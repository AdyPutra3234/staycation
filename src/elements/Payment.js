import React from 'react';
import { Fade } from 'react-reveal';

import InputFile from '../components/InputFile';
import InputText from '../components/InputText';

import logoBCA from '../assets/images/logo-bca.jpg';
import logoMandiri from '../assets/images/logo-mandiri.jpg';

export default function Payment(props) {
    const { data, itemDetails, checkout } = props;
    const tax = 10;
    const subTotal = itemDetails.price * checkout.duration;
    const grandTotal = (subTotal * tax) / 100 + subTotal;

    
    return (
        <Fade>
            <div className='container' style={{marginBottom: 30}}>
                <div className='row justify-content-center align-items-center'>
                    <div className='col-5 border-right py-5' style={{paddingRight: 80}}>
                        <Fade delay={300}>
                            <p className='mb-4'>Payment</p>
                            <p>Tax: {tax}</p>
                            <p>Sub Total: {subTotal}</p>
                            <p>Total: ${grandTotal} USD</p>

                            <div className='row mt-4'>
                                <div className='col-3 text-right'>
                                    <img src={logoBCA} alt='Bank Central Asia' width={60}/>
                                </div>
                                <div className='col'>
                                    <dl>
                                        <dd>Bank Central Asia</dd>
                                        <dd>2208 1996</dd>
                                        <dd>StayCation</dd>
                                    </dl>
                                </div>
                            </div>

                            <div className='row'>
                                <div className='col-3 text-right'>
                                    <img src={logoMandiri} alt='Bank Mandiri' width={60}/>
                                </div>
                                <div className='col'>
                                    <dl>
                                        <dd>Bank Mandiri</dd>
                                        <dd>2206 1998</dd>
                                        <dd>StayCation</dd>
                                    </dl>
                                </div>
                            </div>
                        </Fade>
                    </div>

                    <div className='col-5 py-5' style={{paddingLeft: 80}}>
                        <Fade delay={600}>
                            <label htmlFor='proofPayment'>Upload proof of payment</label>
                            <InputFile
                                accept='image/*'
                                id='proofPayment'
                                name='proofPayment'
                                value={data.proofPayment}
                                onChange={props.onChange}
                            />

                            <label htmlFor='bankName'>Bank Name</label>
                            <InputText
                                id='bankName'
                                name='bankName'
                                type='text'
                                value={data.bankName}
                                onChange={props.onChange}
                            />

                            <label htmlFor='bankHolder'>User Name</label>
                            <InputText
                                id='bankHolder'
                                name='bankHolder'
                                type='text'
                                value={data.bankHolder}
                                onChange={props.onChange}
                            />
                        </Fade>
                    </div>
                </div>
            </div>
        </Fade>
    )
}
