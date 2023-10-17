import React from 'react'

const Homepage = () => {
  return (
    <>
    <div className='container-fluid'>
    <div className='home-banner'>
    <div className='row'>
    <div className='col-11 mx-auto'>
    <div className="text-center our-story">
      <h1>Unlimited movies, TV shows, and more</h1>
      <span>Watch anywhere. Cancel anytime.</span>
      <p>Ready to watch? Enter your email to create or restart your membership.</p>
      <form role="search">
      <div className='row'>
      <div className='col-10 mx-auto'>
      <div className='row'>
      <div className='col-lg-6 order-1 order-lg-1'>
      <input className="form-control input-grp my-2" type='Email' placeholder="Email address" aria-label="Search"/>
      </div>
      <div className='col-lg-6 order-2 order-lg-1'>
      <button className="btn btn-danger home-btn" type="button">Get Started </button>
      </div>
      </div>
      </div>
    </div>
    </form>
    </div>
    </div>
    </div>
    <div className='background-im'></div>
    <img src='https://assets.nflxext.com/ffe/siteui/vlv3/6e32b96a-d4be-4e44-a19b-1bd2d2279b51/ee068656-14b9-4821-89b4-53b4937d9f1c/IN-en-20220516-popsignuptwoweeks-perspective_alpha_website_small.jpg'alt='back-im'/>
    </div>
    </div> 
    </>
  )
}

export default Homepage;
