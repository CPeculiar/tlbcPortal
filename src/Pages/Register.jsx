import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import '../Styles/OtherStyles.css'

function Register() {
  return (
    <>
      <Navbar />

      <section class="hero-section" id="section_1">
        <div class="container d-flex justify-content-center align-items-center">
            <div class="">
                <div class="col-12 mt-4 mb-5 text-center">
                    <h2 class="text-white mb-1" id="annual">Register Now!!!</h2>
                    {/* <p class="text-white">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur saepe
                        quam recusandae totam delectus neque quia quasi maiores, sed quibusdam suscipit qui aut magni
                        obcaecati sint fuga minus a ea?</p> */}
                </div>
            </div>
        </div>
    </section>

    <section class="registration-container">
        <div class="register-form">
            <form id="registration-form" method="post">
                <h2>Registration Form</h2>
                <div class="form-group firstname">
                    <label for="firstname">Firstname</label>
                    <input type="text" id="firstname" name="firstname" placeholder="Enter your firstname"/>
                    <span class="error" id="firstname-error"></span>
                </div>
                <div class="form-group lastname">
                    <label for="lastname">Lastname</label>
                    <input type="text" id="lastname" name="lastname" placeholder="Enter your lastname"/>
                    <span class="error" id="lastname-error"></span>
                </div>
                <div class="form-group gender">
                    <label for="gender">Gender</label>
                    <select id="gender" name="gender">
                        <option value="" selected disabled>Select your gender</option>
                        <option value="M">Male</option>
                        <option value="F">Female</option>
                    </select>
                    <span class="error" id="gender-error"></span>
                </div>
                <div class="form-group email">
                    <label for="email">Email Address</label>
                    <input type="email" id="email" name="email" placeholder="Enter your email address"/>
                    <span class="error" id="email-error"></span>
                </div>
                <div class="form-group password">
                    <label for="password">Password</label>
                    <input type="password" id="password" name="password" placeholder="Enter your password"/>
                    <span class="error" id="password-error"></span>
                </div>
                <div class="form-group birth-date">
                    <label for="date">Birth Date</label>
                    <input type="date" id="date" name="birthdate" placeholder="Select your date"/>
                    <span class="error" id="date-error"></span>
                </div>
                <div class="form-group phone-number">
                    <label for="number">Phone Number</label>
                    <input type="tel" id="number" name="phone" placeholder="Enter your phone number"/>
                    <span class="error" id="number-error"></span>
                </div>
                <div class="form-group address">
                    <label for="address">Address (Street, state, country)</label>
                    <input type="text" id="address" name="address" placeholder="Enter your address"/>
                    <span class="error" id="address-error"></span>
                </div>
                <div class="form-group are-you-member">
                    <label for="member">Are you a member of The Lord's Brethren Church International?</label>
                    <select id="member" name="category">
                        <option value="" selected disabled>Choose option</option>
                        <option value="Member">Yes</option>
                        <option value="Invitee">No</option>
                    </select>
                    <span class="error" id="member-error"></span>
                </div>
                <div class="form-group your-zone" id="is-member" style={{ display: 'none' }}>
                    <label for="churchZone">What is your Church/Zone?</label>
                    <select id="churchZone" name="church_name" disabled>
                        <option value="" selected disabled>Choose your zone</option>
                        <option value="Awka zone">Awka zone</option>
                        <option value="Nnewi zone">Nnewi zone</option>
                        <option value="Owerri zone">Owerri zone</option>
                        <option value="Ekwulobia zone">Ekwulobia zone</option>
                    </select>
                    <span class="error" id="churchZone-error"></span>
                </div>
                <div class="form-group name-of-church" id="not-member" style={{ display: 'none' }}>
                    <label for="churchname">What is the name of your Church/Ministry*</label>
                    <input type="text" id="churchname" disabled name="church_name"
                        placeholder="What is the name of your church?"/>
                    <span class="error" id="churchname-error"></span>
                </div>
                <div class="form-group are-you-aware">
                    <label for="areYouAware">Are you aware that you are registering for a camp meeting?</label>
                    <select id="areYouAware" name="is_aware_of_convention">
                        <option value="" selected disabled>Choose option</option>
                        <option value="true">Yes</option>
                        <option value="false">No</option>
                    </select>
                    <span class="error" id="areYouAware-error"></span>
                </div>
                <div class="form-group are-you-camping">
                    <label for="areYouCamping">Do you intend to camp all through the Convocation?</label>
                    <select id="areYouCamping" name="attendance_mode">
                        <option value="" selected disabled>Choose option</option>
                        <option value="Camper">Yes</option>
                        <option>No</option>
                    </select>
                    <span class="error" id="areYouCamping-error"></span>
                </div>
                <div class="form-group how-to-join" id="dailyOrStreamDiv" style={{ display: 'none' }}>
                    <label for="dailyOrStream">How will you join the Convocation?</label>
                    <select id="dailyOrStream" name="attendance_mode" disabled>
                        <option value="" selected disabled>Choose option</option>
                        <option value="Streamer">Live Streaming</option>
                        <option value="Daily">Daily Attendance</option>
                    </select>
                    <span class="error" id="dailyOrStream-error"></span>
                </div>
                <div class="form-group was-participant">
                    <label for="haveyouAttendedBefore">Have you attended The Convocation in the past?</label>
                    <select id="haveyouAttendedBefore" name="was_participant">
                        <option value="" disabled>Choose option</option>
                        <option value="true">Yes</option>
                        <option value="false">No</option>
                    </select>
                    <span class="error" id="haveyouAttendedBefore-error"></span>
                </div>
                <div class="form-group health-condition">
                    <label for="anyHealthCondition">Do you have any health condition or physical disabilities?</label>
                    <select id="anyHealthCondition">
                        <option value="" selected disabled>Choose option</option>
                        <option value="true">Yes</option>
                        <option value="false">No</option>
                    </select>
                    <span class="error" id="anyHealthCondition-error"></span>
                </div>
                <div class="form-group health-condition" id="yourHealthConditionDiv" style={{ display: 'none' }}>
                    <label for="yourHealthCondition">Tell us about the condition briefly</label>
                    <input type="text" id="yourHealthCondition" name="health_issue" placeholder=""/>
                    <span class="error" id="yourHealthCondition-error"></span>
                </div>
                <div class="form-group reach">
                    <label for="reach">How did you hear about TLBC</label>
                    <select id="reach" name="reach">
                        <option value="" selected disabled>Choose option</option>
                        <option value="Facebook+">Facebook</option>
                        <option value="WhatsApp">WhatsApp</option>
                        <option value="Instagram">Instagram</option>
                        <option value="Church">Church Announcement</option>
                        <option value="Website">Website</option>
                        <option value="Friend">A friend</option>
                        <option value="Outreach">Outreach</option>
                    </select>
                    <span class="error" id="dailyOrStream-error"></span>
                </div>
                <div class="form-group submit-btn">
                    <input type="submit" value="Submit"/>
                </div>
            </form>
        </div>
    </section>

      <Footer />
    </>
  )
}

export default Register