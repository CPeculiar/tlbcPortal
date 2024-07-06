import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import '../Styles/OtherStyles.css';

function Partners() {
  return (
    <>
      <Navbar />

      <section class="hero-section" id="section_1">
        <div class="container d-flex justify-content-center align-items-center">
            <div class="">
                <div class="col-12 mt-4 mb-5 text-center">
                    <h2 class="text-white mb-1" id="annual">Partner with us</h2>
                    <p class="text-white">We are excited to have you consider being our partner for The Lord's Brethren Convocation 2024. Together, we are going to deliver an amazing convocation experience this year.
Your partnership with us is a partnership with the gospel of Jesus Christ, as it gears towards reaching the world with the message of His saving Grace and the building up of the saints for the work of the ministry.
We look forward to collaborating with you in making this year's Convocation a successful one.
Kindly use the form below to submit your details and our team will get to you shortly.
Thank you, God has blessed you!</p>
                </div>
            </div>
        </div>
      </section>


    <section class="registration-container">
        <div class="register-form">
            <form id="registration-form" method="post">
                <h2>Partnership Form</h2>
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

export default Partners