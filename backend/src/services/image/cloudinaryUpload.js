import { v2 as cloudinary } from 'cloudinary'
import {cloudConfig} from '../../config.js'

cloudinary.config({
  cloud_name: cloudConfig.cloudName,
  api_key: cloudConfig.apiKey,
  api_secret: cloudConfig.apiSecret,
})

export default cloudinary