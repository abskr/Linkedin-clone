import mongoose from 'mongoose'

const ProfileSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'user',
    },
    username: {
      type: String,
    },
    title: {
      type: String,
    },
    area: {
      type: String,
    },
    bio: {
      type: String,
    },
    profilePicture: {
      type: String,
      default:
        'https://www.clipartkey.com/mpngs/m/29-297748_round-profile-image-placeholder.png',
    },
    experience: [
      {
        role: {
          type: String,
          required: true,
        },
        company: {
          type: String,
          required: true,
        },
        image: {
          type: String,
          default:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTUkhGVJpZSOrQL9eTVZLooBrhNar9U2_MGA&usqp=CAU',
        },
        area: {
          type: String,
        },
        from: {
          type: Date,
          default: Date.now,
        },
        to: {
          type: Date,
          default: Date.now,
        },
        current: {
          type: Boolean,
          default: false,
        },
        description: {
          type: String,
        },
      },
    ],
    social: {
      twitter: {
        type: String,
      },
      facebook: {
        type: String,
      },
    },
  },
  { timestamps: true }
)

export default mongoose.model('profile', ProfileSchema)