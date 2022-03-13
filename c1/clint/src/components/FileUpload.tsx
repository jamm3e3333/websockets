import React, { useState } from 'react'
import FormData from 'form-data'
import axios from 'axios'

const token = ""
function FileUpload() {
  const [formData, setFormdata] = useState<File | undefined>()

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if(e.target.files) {
      setFormdata(e.target.files[0])
    }
  }

  const fileUpload = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    try {
      const data = new FormData()
      data.append('files', formData)
      console.log(formData)
      const response = await axios('', {
        method: 'post',
        headers: { 
          'Authorization': `Bearer ${token}`,
          'Conent-Type': 'multipart/form-data;',
          'Connection': 'keep-alive',
        },
        data : data
      })
      console.log(response)
      
    } catch(error) {
      console.error(error)
    }
  }
  return (
    <div>
      <form onSubmit={fileUpload} className="form-upload">
        <input onChange={handleChangeInput} type="file" name="files" multiple/>
        <button name="submit" type="submit">upload</button>
      </form>
    </div>
  )
}

export default FileUpload
