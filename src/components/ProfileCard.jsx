import React from 'react'

const ProfileCard = ({ profile, onViewMap }) => {
  return (
    <div className='border p-4 rounded-lg shadow-lg bg-white'>
        <img src={profile.photo} alt={profile.name} className='rounded-full w-20 h-20 mx-auto' />
        <h3 className='text-xl font-bold text-center'>{profile.name}</h3>
        <p className='text-center text-gray-500'>{profile.description}</p>
        <button className='mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 w-full'
        onClick={() => onViewMap(profile)} >
            View on Map
        </button>
    </div>
  )
}

export default ProfileCard