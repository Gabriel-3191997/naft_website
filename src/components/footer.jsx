import React from 'react';
import SocialmediaIcons from '../components/socialmedia-icons';
class Footer extends React.Component{

  render(){

    return(
      <>


<footer class="bg-white">
    <div class="mx-auto w-full max-w-screen-xl">
      <div class="grid grid-cols-2 gap-8 px-4 py-6 lg:py-8 md:grid-cols-4">
        <div>
          <h2 class="mb-6 text-sm font-semibold text-heading uppercase">address</h2>
        </div>
        <div>
            <h2 class="mb-6 text-sm font-semibold text-heading uppercase">resource</h2>
            <ul class="text-body font-medium">
              <li class="mb-4">
                  <a href="#" class="text-red-900 capitalize">home</a>
              </li>
                <li class="mb-4">
                    <a href="#" class="text-red-900">About</a>
                </li>
                <li class="mb-4">
                    <a href="#" class=" capitalize text-red-900">job &amp; Careers</a>
                </li>
                <li class="mb-4">
                    <a href="#" class="text-red-900 uppercase">faq</a>
                </li>
            </ul>
        </div>
        <div>
            <h2 class="mb-6 text-sm font-semibold text-heading uppercase">follow us</h2>
            <ul class="text-body font-medium">
                <li class="mb-4">
                    <a href="#" class="text-red-900 font-sans capitalize">facebook</a>
                </li>
                <li class="mb-4">
                    <a href="#" class="text-red-900 capitalize font-sans">youTube</a>
                </li>
                <li class="mb-4">
                    <a href="#" class="capitalize text-red-900">twitter</a>
                </li>

            </ul>
        </div>
        <div>
            <h2 class="mb-6 text-sm font-semibold text-heading uppercase">Legal</h2>
            <ul class="text-body font-medium">
                <li class="mb-4">
                    <a href="#" class="capitalize text-red-900 font-sans">privacy policy</a>
                </li>
                <li class="mb-4">
                    <a href="#" class="text-red-900 capitalize font-sans">terms &amp; conditions</a>
                </li>
            </ul>
        </div>
        <div className="mb-20">
            <h2 class="mb-6 text-sm font-semibold text-heading uppercase">links</h2>
            <ul class="text-body font-medium">
                <li class="mb-4">
                    <a href="#" class="capitalize text-red-900">how to become a partner</a>
                </li>
                <li class="mb-4">
                    <a href="#" class="capitalize text-red-900">become a supporter</a>
                </li>
                <li class="mb-4">
                    <a href="#" class="capitalize text-red-900">our sponsors &amp; partners</a>
                </li>
            </ul>
        </div>
    </div>
    <div class="px-4 py-6 bg-white md:flex md:items-center md:justify-between border-t border-red-900">
        <span class="text-sm text-body sm:text-center text-red-900">© 2026 <a href="#" className="text-red-900 capitalize">nasseman art of transparecny</a>. All Rights Reserved.
        </span>
        <div class="flex mt-4 sm:justify-center md:mt-0 space-x-2 rtl:space-x-reverse">

          <SocialmediaIcons/>
          </div>
      </div>
    </div>
</footer>

      </>
    )
  }
}
export default Footer;
