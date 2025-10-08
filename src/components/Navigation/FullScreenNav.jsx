import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React, { useContext, useRef } from 'react'
import { NavbarContext } from '../../context/NavContext'

function FullScreenNav() {

    const fullNavLinksRef = useRef(null)
    const fullScreenRef = useRef(null)

    const [navOpen, setNavOpen] = useContext(NavbarContext)


    function gsapAnimation() {
        const tl = gsap.timeline()
        tl.to('.fullscreennav', {
            display: 'block'
        })
        tl.to('.stairing', {
            delay: 0.2,
            height: '100%',
            stagger: {
                amount: -0.3
            }
        })
        tl.to('.link', {
            opacity: 1,
            rotateX: 0,
            stagger: {
                amount: 0.3
            }
        })
        tl.to('.navLink', {
            opacity: 1
        })
    }
    function gsapAnimationReverse() {
        const tl = gsap.timeline()
        tl.to('.link', {
            opacity: 0,
            rotateX: 90,
            stagger: {
                amount: 0.1
            }
        })
        tl.to('.stairing', {
            height: 0,
            stagger: {
                amount: 0.1
            }
        })
        tl.to('.navLink', {
            opacity: 0
        })
        tl.to('.fullscreennav', {
            display: 'none',
        })
    }


    useGSAP(function () {
        if (navOpen) {
            gsapAnimation()
        } else {
            gsapAnimationReverse()
        }
    }, [navOpen])
    return (
        <div ref={fullScreenRef} id='fullscreennav' className='fullscreennav text-white overflow-hidden z-50 h-screen w-full absolute'>
            <div className='h-screen w-full fixed'>
                <div className='h-full w-full flex fixed z-10 top-0'>
                    <div className='stairing h-full w-1/5 bg-black'></div>
                    <div className='stairing h-full w-1/5 bg-black'></div>
                    <div className='stairing h-full w-1/5 bg-black'></div>
                    <div className='stairing h-full w-1/5 bg-black'></div>
                    <div className='stairing h-full w-1/5 bg-black'></div>
                </div>
            </div>
            <div ref={fullNavLinksRef} className='relative'>
                <div className='navLink flex w-full justify-between lg:p-2 p-1 items-start'>
                    <div className=''>
                        <div className='w-20'>
                            <svg className='w-full' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 103 44">
                                <path fill='white' fillRule="evenodd" d="M35.1441047,8.4486911 L58.6905011,8.4486911 L58.6905011,-1.3094819e-14 L35.1441047,-1.3094819e-14 L35.1441047,8.4486911 Z M20.0019577,0.000230366492 L8.83414254,25.3433089 L18.4876971,25.3433089 L29.5733875,0.000230366492 L20.0019577,0.000230366492 Z M72.5255345,0.000691099476 L72.5255345,8.44846073 L94.3991559,8.44846073 L94.3991559,16.8932356 L72.5275991,16.8932356 L72.5275991,19.5237906 L72.5255345,19.5237906 L72.5255345,43.9274346 L102.80937,43.9274346 L102.80937,35.4798953 L80.9357483,35.4798953 L80.9357483,25.3437696 L94.3996147,25.3428482 L94.3996147,16.8953089 L102.80937,16.8953089 L102.80937,0.000691099476 L72.5255345,0.000691099476 Z M-1.30398043e-14,43.9278953 L8.78642762,43.9278953 L8.78642762,0.0057591623 L-1.30398043e-14,0.0057591623 L-1.30398043e-14,43.9278953 Z M58.6849955,8.4486911 L43.1186904,43.9274346 L52.3166592,43.9274346 L67.9877996,8.4486911 L58.6849955,8.4486911 Z M18.4688864,25.3437696 L26.7045278,43.9278953 L36.2761871,43.9278953 L28.1676325,25.3375497 L18.4688864,25.3437696 Z"></path>
                            </svg>
                        </div>
                    </div>
                    <div onClick={() => {
                        setNavOpen(false)
                    }} className='h-20 relative w-20 cursor-pointer'>
                        <div className='h-27 -rotate-45 origin-top absolute w-0.5 bg-[#D3FD50]'></div>
                        <div className='h-27 w-0.5 right-0 rotate-45 origin-top absolute bg-[#D3FD50]'></div>
                    </div>
                </div>
                <div className='py-20'>
                    <div className='link origin-top relative border-t-1 border-white'>
                        <h1 className='font-[font2] text-4xl lg:text-[7vw] text-center lg:leading-[0.8] lg:pt-5 pt-1 uppercase'>Projets</h1>
                        <div className='moveLink absolute flex top-0 text-black bg-[#D3FD50]'>
                            <div className='moveX flex items-center'>
                                <h2 className='whitespace-nowrap font-[font2] lg:text-[7vw] text-3xl text-center lg:leading-[0.8] lg:pt-5 pt-2 uppercase'>Pour Tout Voir</h2>
                                <img className='lg:h-18 h-9 rounded-full shrink-0 lg:w-50 w-15 object-cover' src='https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg' alt=""></img>
                                <h2 className='whitespace-nowrap font-[font2] lg:text-[7vw] text-3xl text-center lg:leading-[0.8] lg:pt-5 pt-2 uppercase'>Pour Tout Voir</h2>
                                <img className='lg:h-18 h-9 rounded-full shrink-0 lg:w-50 w-15 object-cover' src='https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg' alt='' />
                            </div>
                            <div className='moveX flex items-center'>
                                <h2 className='whitespace-nowrap font-[font2] lg:text-[7vw] text-3xl text-center lg:leading-[0.8] lg:pt-5 pt-2 uppercase'>Pour Tout Voir</h2>
                                <img className='lg:h-18 h-9 rounded-full shrink-0 lg:w-50 w-15 object-cover' src='https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg' alt=""></img>
                                <h2 className='whitespace-nowrap font-[font2] lg:text-[7vw] text-3xl text-center lg:leading-[0.8] lg:pt-5 pt-2 uppercase'>Pour Tout Voir</h2>
                                <img className='lg:h-18 h-9 rounded-full shrink-0 lg:w-50 w-15 object-cover' src='https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg' alt='' />
                            </div>
                        </div>
                    </div>
                    <div className='link origin-top relative border-t-1 border-white'>
                        <h1 className='font-[font2] text-4xl lg:text-[7vw] text-center lg:leading-[0.8] lg:pt-5 pt-1 uppercase'>Agence</h1>
                        <div className='moveLink absolute flex top-0 text-black bg-[#D3FD50]'>
                            <div className='moveX flex items-center'>
                                <h2 className='whitespace-nowrap font-[font2] lg:text-[7vw] text-3xl text-center lg:leading-[0.8] lg:pt-5 pt-2 uppercase'>Pour Tout Savoir</h2>
                                <img className='lg:h-18 h-9 rounded-full shrink-0 lg:w-50 w-15 object-cover' src='https://k72.ca/uploads/caseStudies/OKA/OKA_thumbnail-1280x960.jpg' alt=""></img>
                                <h2 className='whitespace-nowrap font-[font2] lg:text-[7vw] text-3xl text-center lg:leading-[0.8] lg:pt-5 pt-2 uppercase'>Pour Tout Savoir</h2>
                                <img className='lg:h-18 h-9 rounded-full shrink-0 lg:w-50 w-15 object-cover' src='https://k72.ca/uploads/caseStudies/Opto/thumbnailimage_opto-1280x960.jpg' alt='' />
                            </div>
                            <div className='moveX flex items-center'>
                                <h2 className='whitespace-nowrap font-[font2] lg:text-[7vw] text-3xl text-center lg:leading-[0.8] lg:pt-5 pt-2 uppercase'>Pour Tout Savoir</h2>
                                <img className='lg:h-18 h-9 rounded-full shrink-0 lg:w-50 w-15 object-cover' src='https://k72.ca/uploads/caseStudies/OKA/OKA_thumbnail-1280x960.jpg' alt=""></img>
                                <h2 className='whitespace-nowrap font-[font2] lg:text-[7vw] text-3xl text-center lg:leading-[0.8] lg:pt-5 pt-2 uppercase'>Pour Tout Savoir</h2>
                                <img className='lg:h-18 h-9 rounded-full shrink-0 lg:w-50 w-15 object-cover' src='https://k72.ca/uploads/caseStudies/Opto/thumbnailimage_opto-1280x960.jpg' alt='' />
                            </div>
                        </div>
                    </div>
                    <div className='link origin-top relative border-t-1 border-white'>
                        <h1 className='font-[font2] text-4xl lg:text-[7vw] text-center lg:leading-[0.8] lg:pt-5 pt-1 uppercase'>Contact</h1>
                        <div className='moveLink absolute flex top-0 text-black bg-[#D3FD50]'>
                            <div className='moveX flex items-center'>
                                <h2 className='whitespace-nowrap font-[font2] lg:text-[7vw] text-3xl text-center lg:leading-[0.8] lg:pt-5 pt-2 uppercase'>Pour Envoyer Un Fax</h2>
                                <img className='lg:h-18 h-9 rounded-full shrink-0 lg:w-50 w-15 object-cover' src='https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg' alt=""></img>
                                <h2 className='whitespace-nowrap font-[font2] lg:text-[7vw] text-3xl text-center lg:leading-[0.8] lg:pt-5 pt-2 uppercase'>Pour Envoyer Un Fax</h2>
                                <img className='lg:h-18 h-9 rounded-full shrink-0 lg:w-50 w-15 object-cover' src='https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg' alt='' />
                            </div>
                            <div className='moveX flex items-center'>
                                <h2 className='whitespace-nowrap font-[font2] lg:text-[7vw] text-3xl text-center lg:leading-[0.8] lg:pt-5 pt-2 uppercase'>Pour Envoyer Un Fax</h2>
                                <img className='lg:h-18 h-9 rounded-full shrink-0 lg:w-50 w-15 object-cover' src='https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg' alt=""></img>
                                <h2 className='whitespace-nowrap font-[font2] lg:text-[7vw] text-3xl text-center lg:leading-[0.8] lg:pt-5 pt-2 uppercase'>Pour Envoyer Un Fax</h2>
                                <img className='lg:h-18 h-9 rounded-full shrink-0 lg:w-50 w-15 object-cover' src='https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg' alt='' />
                            </div>
                        </div>
                    </div>
                    <div className='link origin-top relative border-y-1 border-white'>
                        <h1 className='font-[font2] text-4xl lg:text-[7vw] text-center lg:leading-[0.8] lg:pt-5 pt-1 uppercase'>Blogs</h1>
                        <div className='moveLink absolute flex top-0 text-black bg-[#D3FD50]'>
                            <div className='moveX flex items-center'>
                                <h2 className='whitespace-nowrap font-[font2] lg:text-[7vw] text-3xl text-center lg:leading-[0.8] lg:pt-5 pt-2 uppercase'>Lire Les Articles</h2>
                                <img className='lg:h-18 h-9 rounded-full shrink-0 lg:w-50 w-15 object-cover' src='https://k72.ca/uploads/caseStudies/LAMAJEURE_-_Son_sur_mesure/chalaxeur-thumbnail_img-1280x960.jpg' alt=""></img>
                                <h2 className='whitespace-nowrap font-[font2] lg:text-[7vw] text-3xl text-center lg:leading-[0.8] lg:pt-5 pt-2 uppercase'>Lire Les Articles</h2>
                                <img className='lg:h-18 h-9 rounded-full shrink-0 lg:w-50 w-15 object-cover' src='https://k72.ca/uploads/caseStudies/SHELTON/thumbnailimage_shelton-1280x960.jpg' alt='' />
                            </div>
                            <div className='moveX flex items-center'>
                                <h2 className='whitespace-nowrap font-[font2] lg:text-[7vw] text-3xl text-center lg:leading-[0.8] lg:pt-5 pt-2 uppercase'>Lire Les Articles</h2>
                                <img className='lg:h-18 h-9 rounded-full shrink-0 lg:w-50 w-15 object-cover' src='https://k72.ca/uploads/caseStudies/LAMAJEURE_-_Son_sur_mesure/chalaxeur-thumbnail_img-1280x960.jpg' alt=""></img>
                                <h2 className='whitespace-nowrap font-[font2] lg:text-[7vw] text-3xl text-center lg:leading-[0.8] lg:pt-5 pt-2 uppercase'>Lire Les Articles</h2>
                                <img className='lg:h-18 h-9 rounded-full shrink-0 lg:w-50 w-15 object-cover' src='https://k72.ca/uploads/caseStudies/SHELTON/thumbnailimage_shelton-1280x960.jpg' alt='' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}


export default FullScreenNav
