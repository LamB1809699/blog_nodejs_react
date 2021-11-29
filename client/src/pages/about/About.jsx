import React from 'react';
import Sidebar from '../../components/sidebar/Sidebar'
import HeaderAbout from '../../components/headerAbout/HeaderAbout'
import './about.css';

export default function About() {
    return (
        <div className = "container-fluid">
            <HeaderAbout />
            <div className="row">
                <div className="col-9 aboutWrapper">
                    <h2 className = "aboutTitle">Welcome to our page!</h2>
                    <div className = "aboutTopPara">
                        <img 
                            src="https://wallpapercave.com/wp/wp3277298.jpg" 
                            alt="" 
                            className="aboutImg shadow-lg rounded" 
                        />
                        <p className = "aboutPara">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer odio nulla, convallis vel eleifend vel, imperdiet sit amet felis. Etiam lobortis enim in nulla tincidunt venenatis. Sed quis risus nec libero suscipit rhoncus et ut eros. Praesent tempor bibendum leo a congue. Phasellus sollicitudin velit ut lectus egestas eleifend ut sit amet nibh. Pellentesque et congue felis. Maecenas sed est eleifend, consequat nibh quis, feugiat purus. Suspendisse potenti. Pellentesque at magna ac ante hendrerit tempor. Vivamus id eros lacus. In non purus sodales, convallis diam eu, varius velit. Pellentesque facilisis consectetur velit ac fermentum. Mauris varius, turpis ac scelerisque sagittis, urna odio facilisis augue, mattis ullamcorper libero mauris at nulla. Pellentesque pulvinar egestas turpis, in venenatis diam tempus nec. Nullam varius accumsan neque, at ornare sem dictum eget.<br/>
                        </p>
                    </div>
                    <p>
                    Vivamus id accumsan elit, sed gravida quam. Aenean consequat neque quis viverra molestie. Mauris vel ex porta, auctor dui sed, rhoncus velit. Quisque tincidunt urna massa, a auctor sem eleifend a. Integer vel elementum tortor. Nunc in pretium lacus. Donec lobortis nibh semper, rhoncus quam eget, sodales metus. Nullam massa augue, aliquam eu vehicula sit amet, tincidunt id ex. Etiam aliquam, dui et aliquam dignissim, urna elit consequat justo, eget congue quam neque vitae orci. Nam nec ultrices urna. Maecenas efficitur felis sed sapien scelerisque luctus. Praesent dolor purus, molestie ut quam ac, pretium efficitur arcu. Donec semper sit amet felis ut maximus. Donec venenatis metus non nisi ultrices, sit amet auctor lorem sodales. Sed ex erat, sollicitudin vel finibus id, mollis et mi. Nulla non imperdiet diam.<br/>
                    </p>
                    <h2 className = "aboutTitle" style = {{textAlign: 'right'}}>Let's have an adventure!</h2>
                    <div className = "aboutBottomPara">
                        <p className = "aboutPara">
                            Fusce semper blandit turpis eget ullamcorper. In pretium fringilla libero molestie viverra. Aliquam quis ultricies orci. Nulla facilisi. Praesent tellus ex, mollis id nisl viverra, vehicula consectetur massa. In dignissim lectus in nulla vulputate hendrerit. Maecenas accumsan mauris augue, vel mollis mi vestibulum placerat. Nunc ut augue eu nulla semper imperdiet eu id nisi. Phasellus ex metus, bibendum sed nisl non, pulvinar sagittis eros. Praesent vulputate euismod malesuada. Vestibulum sed augue quam. Maecenas nisi erat, ultrices et accumsan ac, consectetur id turpis. Quisque a mi quis eros lobortis ornare. Suspendisse dapibus cursus tellus vitae facilisis. Sed lorem lectus, porta vitae mi nec, imperdiet sollicitudin massa. Interdum et malesuada fames ac ante ipsum primis in faucibus.<br/>
                            Integer auctor neque id augue venenatis, accumsan mattis lacus convallis. Curabitur sit amet ipsum venenatis, hendrerit libero nec, malesuada metus. Nullam malesuada eros libero. Aliquam placerat a augue a commodo. Donec tristique diam nulla, nec maximus purus rhoncus luctus. Donec fermentum auctor dolor, sit amet finibus ipsum viverra ac. Nam tempor augue ac ipsum convallis interdum. Phasellus non dapibus justo. Donec at dui pharetra enim sollicitudin pulvinar eget ut dui. Nullam at felis luctus, facilisis turpis id, ultricies nisi. Vestibulum eu augue a velit porta luctus. Donec eget fringilla tellus. Mauris vel condimentum lectus. Vestibulum ultricies tempus nisl, sed pretium tortor faucibus in. Duis nisi lorem, gravida id orci sed, pharetra viverra dolor.
                        </p>
                        <img 
                            src="https://cdn.wallpapersafari.com/62/99/pUSFue.jpg" 
                            alt="" 
                            className="aboutImg shadow-lg mb-5 rounded" 
                        />
                    </div>
                </div>
                <div className="col-3"><Sidebar /></div>
            </div>
        </div>
    )
}
