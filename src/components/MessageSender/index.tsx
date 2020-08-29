import { Avatar } from '@material-ui/core';
import React from 'react';
import './MessageSender.css';
import {Formik,Form, Field} from 'formik';
import * as yup from 'yup'
import { Videocam, PhotoLibrary,InsertEmoticon } from '@material-ui/icons';

interface Props {
  
}

const validationSchema = yup.object({
  message: yup.string().required()
})

const MessageSender = (props: Props) => {

  return (
    <div className='messageSender'>
      <div className="messageSender__top">
      <Avatar/>
      <Formik 
 initialValues={{ message: '', url:''}}
validateOnChange={true}
validationSchema={validationSchema}
 onSubmit={ (data, {setSubmitting,resetForm}) => {

   setSubmitting(true);
   // make async call
   console.log('DATTAAAAA',data)
   setSubmitting(false);
   resetForm();
 }}
 >
   {
  ({values,errors, isSubmitting,touched}) => {

    const Border  = touched.message && errors.message ? 'red' : 'transparent';
    
    return (
    <Form >

 <Field type="text" name="message" placeholder="What's on your mind" style={{borderColor: Border}}  className='messageSender__input'/>


 <Field type="text" name='url' placeholder='image URL (optional)' style={{border:'none'}} />


 <button type='submit' >
   Submit
 </button>


    </Form>
  )}
}
 </Formik>
   </div>

      <div className="messageSender__bottom">
<div className="messageSender__option">
  <Videocam style={{color:'red'}} />
  <h3>Live Video</h3>
</div>

<div className="messageSender__option">
  <PhotoLibrary style={{color:'green'}} />
  <h3>photo/Video</h3>
</div>

<div className="messageSender__option">
  <InsertEmoticon style={{color:'yellow'}} />
  <h3>Feeling/Activity</h3>
</div>
      </div>
    </div>
  )
}

export default MessageSender
