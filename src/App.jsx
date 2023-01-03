import { useEffect, useLayoutEffect, useState } from 'react'
import bgSidebarMobile from './assets/bg-sidebar-mobile.svg'
import bgSidebarDesktop from './assets/bg-sidebar-desktop.svg'
import iconArcade from './assets/icon-arcade.svg'
import iconAdvanced from './assets/icon-advanced.svg'
import iconPro from './assets/icon-pro.svg'
import iconCheckmark from './assets/icon-checkmark.svg'
import iconThankyou from './assets/icon-thank-you.svg'
import './App.css'
import Button from './components/button'
import Label from './components/label'
import Input from './components/input'
import FormGroup from './components/formGroup'
import Form from './components/form'
import Footer from './components/footer'
import Card from './components/card'
import Tile from './components/tile'
import Heading from './components/heading'
import Badge from './components/badge'

const menuItems = [
  {
    "id": 1,
    "title": "your info"
  },
  {
    "id": 2,
    "title": "select plan"
  },
  {
    "id": 3,
    "title": "add-ons"
  },
  {
    "id": 4,
    "title": "summary"
  }
]

function App() {
  const [active, setActive] = useState(1)

  function handleActive(index) {
    setActive(index)
  }

  return (
    
    <div className="relative min-h-screen">

    <div className="lg:relative lg:flex lg:flex-row lg:flex-wrap lg:bg-white lg:rounded-md lg:w-[940px] lg:h-[600px] lg:p-4 lg:mx-auto pb-24 lg:pb-4">
      <img className="absolute lg:hidden top-0 left-0 w-full" src={bgSidebarMobile} alt="background" />
      <img className="absolute hidden lg:block top-0 left-0 m-4" src={bgSidebarDesktop} alt="background" />
      <ul className="relative flex flex-row lg:flex-col justify-around lg:justify-start lg:gap-y-8 w-48 mx-auto lg:mx-8 py-8">
        {menuItems.map((item) => (
          <li className="flex flex-row items-center lg:gap-x-4 lg:w-full cursor-pointer" key={item.id} onClick={() => handleActive(item.id)}>
            <Badge isActive={active === item.id}>{item.id}</Badge>
            <span className="hidden lg:block">
              <span className="block uppercase text-xs text-[#ABBCFF]">Step {item.id}</span>
              <span className="block uppercase text-sm font-bold text-white">{item.title}</span>
            </span>
          </li>
        ))}
      </ul>

      {active === 1 &&
        <Card>
          <Heading>Personal info</Heading>
          <p className="text-[#9699AA]">Please provide your name, email address, and phone number.</p>
          <Form>
            <FormGroup>
              <Label htmlFor="name">Name</Label>
              <Input 
                id="name"
                placeholder="e.g. Stephen King"
                isRequired={true}
              />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="email">Email Address</Label>
              <Input 
                id="email"
                type="email"
                placeholder="e.g. stephenking@lorem.com"
                isRequired={true}
              />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="phone">Phone Number</Label>
              <Input 
                id="phone"
                type="tel"
                placeholder="e.g. +1 234 567 890"
                isRequired={true}
              />
            </FormGroup>
          </Form>
        </Card>
      }
        
      {active === 2 &&
        <Card>
          <Heading>Select your plan</Heading>
          <p className="text-[#9699AA]">You have the option of monthly or yearly billing.</p>
          <div className="lg:flex lg:flex-row lg:gap-x-5">
            <div className="lg:basis-1/3">
              <input type="radio" id="arcade" name="hosting" value="arcade" class="hidden peer" required />
              <label for="arcade" class="flex flex-row lg:flex-col items-center lg:items-start gap-x-3 border border-[#D6D9E6] hover:border-[#483EFF] peer-checked:bg-[#F8F9FF] peer-checked:border-[#483EFF] rounded-md w-full p-4 mt-3 cursor-pointer">                           
                <img className="lg:mb-10" src={iconArcade} alt="arcade icon" />
                <div>
                  <Heading version="heading-2">Arcade</Heading>
                  <p className="text-[#9699AA] text-sm">$9/mo</p>
                </div>
              </label>
            </div>
            <div className="lg:basis-1/3">
              <input type="radio" id="advanced" name="hosting" value="advanced" class="hidden peer" />
              <label for="advanced" class="flex flex-row lg:flex-col items-center lg:items-start gap-x-3 border border-[#D6D9E6] hover:border-[#483EFF] peer-checked:bg-[#F8F9FF] peer-checked:border-[#483EFF] rounded-md w-full p-4 mt-3 cursor-pointer">
                <img className="lg:mb-10" src={iconAdvanced} alt="arcade icon" />
                <div>
                  <Heading version="heading-2">Advanced</Heading>
                  <p className="text-[#9699AA] text-sm">$12/mo</p>
                </div>
              </label>
            </div>
            <div className="lg:basis-1/3">
              <input type="radio" id="pro" name="hosting" value="pro" class="hidden peer" />
              <label for="pro" class="flex flex-row lg:flex-col items-center lg:items-start gap-x-3 border border-[#D6D9E6] hover:border-[#483EFF] peer-checked:bg-[#F8F9FF] peer-checked:border-[#483EFF] rounded-md w-full p-4 mt-3 cursor-pointer">
                <img className="lg:mb-10" src={iconPro} alt="arcade icon" />
                <div>
                  <Heading version="heading-2">Pro</Heading>
                  <p className="text-[#9699AA] text-sm">$15/mo</p>
                </div>
              </label>
            </div>
          </div>
          <div className="flex flex-row items-center justify-center bg-[#F8F9FF] rounded-md p-4 mt-5">
            <span className="text-sm font-medium text-[#022959]">Monthly</span>
            <label className="inline-flex relative items-center cursor-pointer mx-6">
              <input type="checkbox" value="" className="sr-only peer" />
              <div className="w-11 h-6 bg-[#022959] peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#022959]"></div>
            </label>
            <span className="text-sm font-medium text-[#9699AA]">Yearly</span>
          </div>
        </Card>
      }

      {active === 3 &&
        <Card>
          <Heading>Pick add-ons</Heading>
          <p className="text-[#9699AA]">Add-ons help enhance your gaming experience.</p>
          <Tile>
            <div className="group-aria-checked:bg-[#483EFF] flex flex-row justify-center items-center rounded-md border border-[#D6D9E6] w-5 h-5">
              <img className="invisible group-aria-checked:visible" src={iconCheckmark} alt="checkmark" />
            </div>
            <div>
              <Heading version="heading-2">Online service</Heading>
              <p className="text-[#9699AA] text-sm">Access to multiplayer games</p>
            </div>
          </Tile>
          <Tile>
            <div className="group-aria-checked:bg-[#483EFF] flex flex-row justify-center items-center rounded-md border border-[#D6D9E6] w-5 h-5">
              <img className="invisible group-aria-checked:visible" src={iconCheckmark} alt="checkmark" />
            </div>
            <div>
              <Heading version="heading-2">Larger storage</Heading>
              <p className="text-[#9699AA] text-sm">Extra 1 TB of cloud storage</p>
            </div>
          </Tile>
          <Tile>
            <div className="group-aria-checked:bg-[#483EFF] flex flex-row justify-center items-center rounded-md border border-[#D6D9E6] w-5 h-5">
              <img className="invisible group-aria-checked:visible" src={iconCheckmark} alt="checkmark" />
            </div>
            <div>
              <Heading version="heading-2">Customizable profile</Heading>
              <p className="text-[#9699AA] text-sm">Custom theme on your profile</p>
            </div>
          </Tile>
        </Card>
      }

      {active === 4 &&
        <Card>
          <Heading>Finishing up</Heading>
          <p className="text-[#9699AA]">Double-check everything looks OK before confirming.</p>
          <div className="grid grid-cols-2 bg-[#F8F9FF] rounded-md p-4 my-5">
            {/* <div> */}
              <Heading version="heading-2 col-span-2">Arcade (Monthly)</Heading>
              <p className="col-span-1 text-[#9699AA] text-sm">Change</p>
              <p className="col-span-1 text-sm font-bold text-right">$9/mo</p>
            {/* </div> */}
            <span className="col-span-2 border-b w-full my-3"></span>
            {/* <div> */}
              <p className="col-span-1 text-[#9699AA] text-sm">Online service</p>
              <p className="col-span-1 text-sm text-right">+$1/mo</p>
              <p className="col-span-1 text-[#9699AA] text-sm">Larger storage</p>
              <p className="col-span-1 text-sm text-right">+$2/mo</p>
            {/* </div> */}
          </div>
          <p className="text-[#9699AA] text-sm mx-4">Total (per month)<span className="text-[#483EFF] font-bold float-right">+$12/mo</span></p>
        </Card>
      }

      {active === 5 &&
        <Card>
          <div className="text-center">
            <img className="w-14 h-14 mx-auto my-4" src={iconThankyou} alt="thank you icon" />
            <Heading>Thank you!</Heading>
            <p className="text-[#9699AA] my-4">Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support, please feel free to email us at support@loremgaming.com.</p>
          </div>
        </Card>
      }
    </div>

    {active < 5 &&
        <Footer>
          {active > 1 && active < 5
            ? <Button onClick={() => setActive(active - 1)} version="btn-secondary">Go Back</Button>
            : <div></div>
          }
          {active < 4 
            ? <Button onClick={() => setActive(active + 1)}>Next Step</Button>
            : <Button onClick={() => setActive(active + 1)} version="btn-success">Confirm</Button>
          }
        </Footer>
      }
    </div>
  )
}

export default App
