import React, { useState } from 'react';

function Index() {
    const [selectedMenuItem, setSelectedMenuItem] = useState(null);
    const [showSidebar, setShowSidebar] = useState(true);

    const handleMenuItemClick = (menuItem) => {
        setSelectedMenuItem(menuItem);
    };

    const toggleSidebar = () => {
        setShowSidebar(!showSidebar);
    };

    const sidebarMenuItems = [
        { id: 1, label: 'Dashboard' },
        { id: 2, label: 'Order' },
        { id: 3, label: 'Upcoming Order' },
        { id: 3, label: 'Cancel Order' },

        // Add more menu items as needed
    ];

    const renderContent = () => {
        switch (selectedMenuItem) {
            case 'Dashboard':
                return (

                    <div>
                        <h2>Dashboard Content Goes Here</h2>
                    </div>
                );
            case 'Order':
                return (

                    <div>
                        <h2>Reports Content Goes Here</h2>
                    </div>
                );
            case 'Cancel Order':
                return (

                    <div>
                        <h2>Settings Content Goes Here</h2>
                    </div>
                );
            default:
                return (

                    <div>
                        <h2>Welcome to the Dashboard</h2>
                    </div>
                );
        }
    };

    return (
        <div className='mainbanner'><br /><br /><br />
            <div className='  border-t-2 border-white'>
                <div className='flex'>

                    <button onClick={toggleSidebar} className='md:hidden'>
                        {showSidebar ? 'Hide' : 'Show'} Sidebar
                    </button>


                    {showSidebar && (
                        <div className='md:basis-[20%] bg-black h-[93vh] '>
                            <img className='h-[70px] m-auto rounded-full' src='https://img.freepik.com/free-vector/plate-cuttlery-graphic-illustration_53876-9118.jpg?w=740&t=st=1704877152~exp=1704877752~hmac=2527bac369dafc8e1d46bab1460b9ce07420fd5dfce48284c0cb48f131259ce1' />
                            <ul className=''>
                                {sidebarMenuItems.map((menuItem) => (
                                    <li key={menuItem.id} >
                                        <button className='bg-red-300 hover:bg-blue-400 border-b-2 w-full p-3 hover:border-l-2' onClick={() => handleMenuItemClick(menuItem.label)}>
                                            {menuItem.label}
                                        </button>
                                    </li>
                                ))}
                            </ul>

                        </div>
                    )}


                    <div className='md:basis-[80%] w-full  bg-white '>
                        <div className='bg-black h-[70px]'>
                            <div className='flex text-white justify-between pr-10 py-5'>
                                <div></div>
                                <div>
                                    <input type="checkbox" id="checkbox" />
                                    <label for="checkbox" class="switch">
                                       Online
                                        <svg
                                            class="slider"
                                            viewBox="0 0 512 512"
                                            height="1em"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32V256c0 17.7 14.3 32 32 32s32-14.3 32-32V32zM143.5 120.6c13.6-11.3 15.4-31.5 4.1-45.1s-31.5-15.4-45.1-4.1C49.7 115.4 16 181.8 16 256c0 132.5 107.5 240 240 240s240-107.5 240-240c0-74.2-33.8-140.6-86.6-184.6c-13.6-11.3-33.8-9.4-45.1 4.1s-9.4 33.8 4.1 45.1c38.9 32.3 63.5 81 63.5 135.4c0 97.2-78.8 176-176 176s-176-78.8-176-176c0-54.4 24.7-103.1 63.5-135.4z"
                                            ></path>
                                        </svg>
                                    </label>

                                </div>
                            </div>
                        </div>
                        <div className='p-5'>
                            {renderContent()}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Index;
