import React, { Component } from 'react'
import { Fade } from 'react-reveal';

import Button from '../components/Button';
import Stepper from '../components/Stepper';
import Controller from '../components/Stepper/Controller';
import MainContent from '../components/Stepper/MainContent';
import Meta from '../components/Stepper/Meta';
import Numbering from '../components/Stepper/Numbering';
import BookingInformation from '../elements/BookingInformation';
import Completed from '../elements/Completed';
import Header from '../elements/Header';
import Payment from '../elements/Payment';

import itemDetails from '../json/itemDetails.json';

export default class CheckoutPage extends Component {
  state = {
    data: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      proofPayment: '',
      bankName: '',
      bankHolder: ''
    },
  };

  onChange = event => {
    this.setState({
      data: {
        ...this.state.data,
        [event.target.name]: event.target.value,
      },
    });
  }

  componentDidMount() {
    window.scrollTo(0,0);
  }


  render() {
    const {data} = this.state;
    const checkout = {
      duration: 3
    }
    const steps = {
      bookingInformation: {
        title: 'Booking Information',
        description: 'Please fill up the blank field bellow',
        content: (
          <BookingInformation
            data={data}
            checkout={checkout}
            itemDetails={itemDetails}
            onChange={this.onChange}
          />
        )
      },
      payment: {
        title: 'Payment',
        description: 'Kindly follow the instruction bellow',
        content: (
          <Payment
            data={data}
            itemDetails={itemDetails}
            checkout={checkout}
            onChange={this.onChange}
          />
        )
      },
      completed: {
        title: 'Yey! Completed',
        description: null,
        content: <Completed/>
      }
    }

    return (
        <>
            <Header isCentered />
            <Stepper steps={steps} initialStep='bookingInformation'>
              {
                (prevStep, nextStep, currentStep, steps) => (
                  <>
                    <Numbering
                      data={steps}
                      current={currentStep}
                      style={{marginBottom: 50}}
                    />

                    <Meta data={steps} current={currentStep} />

                    <MainContent data={steps} current={currentStep} />

                    { currentStep === 'bookingInformation' && (
                      <Controller>
                        {data.firstName !== '' &&
                          data.lastName !== '' &&
                          data.email !== '' &&
                          data.phone !== '' && (
                            <Fade>
                              <Button
                                className='btn mb-3'
                                type='button'
                                isBlock
                                isPrimary
                                hasShadow
                                onClick={nextStep}
                              >
                                Continue to Book
                              </Button>
                            </Fade>
                          )}

                          <Button
                            className='btn'
                            type='link'
                            isBlock
                            isLight
                            href={`/properties/${itemDetails._id}`}
                          >
                            Cancel
                          </Button>
                      </Controller>
                    )}

                    { currentStep === 'payment' && (
                      <Controller>
                        {data.proofPayment !== '' &&
                          data.bankName !== '' &&
                          data.bankHolder !== '' && (
                            <Fade>
                              <Button
                                className='btn mb-3'
                                type='button'
                                isBlock
                                isPrimary
                                hasShadow
                                onClick={nextStep}
                              >
                                Continue to Book
                              </Button>
                            </Fade>
                          )}

                          <Button
                            className='btn'
                            type='button'
                            isBlock
                            isLight
                            onClick={prevStep}
                          >
                            Cancel
                          </Button>
                      </Controller>
                    )}

                    {currentStep === 'completed' && (
                      <Controller>
                        <Button
                            className='btn'
                            type='link'
                            isBlock
                            isPrimary
                            hasShadow
                            href={'/'}
                          >
                            Back to Home
                          </Button>
                      </Controller>
                    )}
                  </>
                )
              }
            </Stepper>
        </>
    );
  }
}
