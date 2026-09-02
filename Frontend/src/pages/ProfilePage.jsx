import React from 'react'
import { ProfileCard } from '../comps'
import { useDispatch, useSelector } from 'react-redux'
import { useState} from 'react'
import axios from 'axios'
import { BaseUrl } from '../utils/constants'
import { UserActions } from '../store/userSlice'
import {Toast} from '../comps'

function ProfilePage() {
  
  const {userData} = useSelector((state)=> state.user)

  const [photoUrl, setphotoUrl] = useState(userData.photoUrl);
  const [firstName, setfirstName] = useState(userData.firstName);
  const [age, setage] = useState(userData.age);
  const [bio, setbio] = useState(userData.bio);
  const [gender, setgender] = useState(userData.gender);
  const [skills , setskills] = useState(userData.skills) ; 
  const [skillInput, setSkillInput] = useState("");
  const [showToast , setToast] = useState(false) ; 
 
  const [Error , SetError] = useState("")

  const dispatch = useDispatch() ; 

  const handleSave = async()=>{
      SetError("")
      try {
        const res = await axios.patch(BaseUrl + "/profile/edit" , {firstName , photoUrl , age , gender , bio , skills} , {withCredentials :true })

        dispatch(UserActions.login(res?.data?.data)) ;

        setToast(true) ; 


        setTimeout(() => {
          setToast(false);
        }, 3000);

      } catch (error) {
        console.log(error)
        SetError(error.response.data) ; 
      }
  } ; 

  return<>
    <h2 className='text-3xl text-purple-300 text-center mt-8 'style={{ fontFamily: "Satisfy, cursive" }}>“Your digital handshake with the dev community.” 🤝 {userData.firstName}</h2>

      <div className="min-h-[90%] flex justify-center items-center mt-15 gap-5">
        {showToast && <Toast text = {"Profile saved Successfully"}/>}
        <div className="flex justify-center items-center">
          <div className="card card-border bg-base-300 w-110 min-h-90 mb-20">
            <div className="card-body p-6">

              <div className="flex flex-col items-center">
                <h2 className="card-title text-2xl font-medium">
                  Edit your Profile
                </h2>
              </div>

              <fieldset className="fieldset w-80 mx-auto">
                <legend className="fieldset-legend text-xl font-light">
                  First Name
                </legend>

                <input
                  type="text"
                  className="input input-sm w-full"
                  value={firstName}
                  placeholder="Enter your first name"
                  onChange={(e) => setfirstName(e.target.value)}
                />
              </fieldset>

              <fieldset className="fieldset mb-2 w-80 mx-auto">
                <legend className="fieldset-legend text-xl font-light">
                  Age
                </legend>

                <input
                  type="number"
                  className="input input-sm w-full"
                  value={age}
                  placeholder="Enter your age"
                  onChange={(e) => setage(e.target.value)}
                />
              </fieldset>

              <fieldset className="fieldset w-80 mx-auto">
                <legend className="fieldset-legend text-xl font-light">
                  Photo URL
                </legend>

                <input
                  type="url"
                  className="input input-sm w-full"
                  value={photoUrl}
                  placeholder="Enter your photo URL"
                  onChange={(e) => setphotoUrl(e.target.value)}
                />
              </fieldset>

              <fieldset className="fieldset mb-2 w-80 mx-auto">
                <legend className="fieldset-legend text-xl font-light">
                  Gender
                </legend>

                <select
                  className="select select-sm w-full"
                  value={gender}
                  onChange={(e) => setgender(e.target.value)}
                >
                  <option value="" disabled>
                    Select your gender
                  </option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </fieldset>

              <fieldset className="fieldset w-80 mx-auto">
                <legend className="fieldset-legend text-xl font-light">
                  Bio
                </legend>

                <textarea
                  className="textarea textarea-sm w-full"
                  value={bio}
                  placeholder="Tell us something about yourself"
                  onChange={(e) => setbio(e.target.value)}
                />
              </fieldset>

              <fieldset className="fieldset mb-2 w-80 mx-auto">
                <legend className="fieldset-legend text-xl font-light">
                  Skills
                </legend>

                <input
                  type="text"
                  className="input input-sm w-full"
                  value={skillInput}
                  placeholder="e.g. React, Node.js, MongoDB"
                  onChange={(e) => {
                    setSkillInput(e.target.value);
                    setskills(
                      e.target.value
                        .split(",")
                        .map((skill) => skill.trim())
                        .filter((skill) => skill !== "")
                    );
                  }}
                />
              </fieldset>

              {Error !== "" && (
                <p className="text-red-600 text-base text-center">
                  {Error + " !!"}
                </p>
              )}

              <div className="card-actions justify-center">
                <button className="btn btn-primary btn-sm w-40 mb-3" 
                    onClick={handleSave}>
                  Save Profile
                </button>
              </div>

            </div>
          </div>
        </div>

        <div className="scale-90 min-h-200 bg-base-300 mb-22 rounded-xl">
          <ProfileCard user={{firstName , photoUrl , age , gender , bio , skills}} />
        </div>
      </div>
  </>
}

export default ProfilePage