import React from "react";
 import Master from "../common/Master/Master"
const Profile = () => {
   
  return (
    <Master>
    <div class="container-fluid">
        <div class="row flex-nowrap">
            <div class="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-light">
                <div class="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-dark min-vh-100">
                    <a href="#" class="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
                        <span class="fs-5 d-none d-sm-inline">Menu</span>
                    </a>
                    <ul class="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
                        <li class="nav-item">
                            <a href="#" class="nav-link align-middle px-0">
                                <i class="fa-solid fa-user"></i> <span class="ms-1 d-none d-sm-inline text-dark ">Profile</span>
                            </a>
                        </li>
                        <li>
                            <a href="#submenu1" data-bs-toggle="collapse" class="nav-link px-0 align-middle">
                                <i class="fa-solid fa-gauge-high"></i> <span class="ms-1 d-none d-sm-inline text-dark ">Dashboard</span> </a>
                            <ul class="collapse show nav flex-column ms-1" id="submenu1" data-bs-parent="#menu">
                                <li class="w-100">
                                    <a href="#" class="nav-link px-0"> <span class="d-none d-sm-inline text-dark ">Item-1 </span> </a>
                                </li>
                                <li>
                                    <a href="#" class="nav-link px-0"> <span class="d-none d-sm-inline text-dark ">Item-2</span> </a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="#" class="nav-link px-0 align-middle">
                                <i class="fa-solid fa-table"></i> <span class="ms-1 d-none d-sm-inline text-dark ">Orders</span></a>
                        </li>
                        <li>
                            <a href="#submenu2" data-bs-toggle="collapse" class="nav-link px-0 align-middle ">
                                <i class="fa-brands fa-bootstrap"></i> <span class="ms-1 d-none d-sm-inline text-dark ">Bootstrap</span></a>
                            <ul class="collapse nav flex-column ms-1" id="submenu2" data-bs-parent="#menu">
                                <li class="w-100">
                                    <a href="#" class="nav-link px-0"> <span class="d-none d-sm-inline text-dark ">Item-1 </span> </a>
                                </li>
                                <li>
                                    <a href="#" class="nav-link px-0"> <span class="d-none d-sm-inline text-dark ">Item-2</span> </a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="#submenu3" data-bs-toggle="collapse" class="nav-link px-0 align-middle">
                                <i class="fa-brands fa-product-hunt"></i><span class="ms-1 d-none d-sm-inline text-dark ">Products</span> </a>
                                <ul class="collapse nav flex-column ms-1" id="submenu3" data-bs-parent="#menu">
                                <li class="w-100">
                                    <a href="#" class="nav-link px-0"> <span class="d-none d-sm-inline text-dark ">Product-1</span> </a>
                                </li>
                                <li>
                                    <a href="#" class="nav-link px-0"> <span class="d-none d-sm-inline text-dark ">Product-2</span> </a>
                                </li>
                                <li>
                                    <a href="#" class="nav-link px-0"> <span class="d-none d-sm-inline text-dark ">Product-3</span> </a>
                                </li>
                                <li>
                                    <a href="#" class="nav-link px-0"> <span class="d-none d-sm-inline text-dark ">Product-4</span> </a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="#" class="nav-link px-0 align-middle">
                                <i class="fa-solid fa-people-group"></i><span class="ms-1 d-none d-sm-inline text-dark ">Customers</span> </a>
                        </li>
                    </ul>
                    <hr/>
                </div>
            </div>
            <div class="col py-3">
                <div class="main-content">
                    <div class="container mt-7">
                      
                      <h2 class="mb-5 ">My Account</h2>
                      <div class="row">
                        <div class="col-xl-8 m-auto order-xl-1">
                          <div class="card p-md-4 shadow">
                            <div class="card-header bg-white border-0">
                              <div class="row align-items-center">
                              </div>
                            </div>
                            <div class="card-body">
                              <form>
                                <h4 class="heading-small text-dark mb-4">User information</h4>
                                <div class="pl-lg-4">
                                  <div class="row">
                                    <div class="col-lg-6">
                                      <div class="form-group focused">
                                        <label class="form-control-label" for="input-username">Username</label>
                                        <input type="text" id="input-username" class="form-control form-control-alternative" placeholder="Username" />
                                      </div>
                                    </div>
                                    <div class="col-lg-6">
                                      <div class="form-group">
                                        <label class="form-control-label" for="input-email">Email address</label>
                                        <input type="email" id="input-email" class="form-control form-control-alternative" placeholder="Email"/>
                                      </div>
                                    </div>
                                  </div>
                                  <div class="row">
                                    <div class="col-lg-6">
                                      <div class="form-group focused">
                                        <label class="form-control-label" for="input-first-name">First name</label>
                                        <input type="text" id="input-first-name" class="form-control form-control-alternative" placeholder="First name"/>
                                      </div>
                                    </div>
                                    <div class="col-lg-6">
                                      <div class="form-group focused">
                                        <label class="form-control-label" for="input-last-name">Last name</label>
                                        <input type="text" id="input-last-name" class="form-control form-control-alternative" placeholder="Last name"/>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <hr class="my-4"/>
                            
                                <h6 class="heading-small text-muted mb-4">Contact information</h6>
                                <div class="pl-lg-4">
                                  <div class="row">
                                    <div class="col-md-12">
                                      <div class="form-group focused">
                                        <label class="form-control-label" for="input-address">Address</label>
                                        <input id="input-address" class="form-control form-control-alternative" placeholder="Home Address"  type="text"/>
                                      </div>
                                    </div>
                                  </div>
                                  <div class="row">
                                    <div class="col-lg-4">
                                      <div class="form-group focused">
                                        <label class="form-control-label" for="input-city">City</label>
                                        <input type="text" id="input-city" class="form-control form-control-alternative" placeholder="City"/>
                                      </div>
                                    </div>
                                    <div class="col-lg-4">
                                      <div class="form-group focused">
                                        <label class="form-control-label" for="input-country">Country</label>
                                        <input type="text" id="input-country" class="form-control form-control-alternative" placeholder="Country"/>
                                      </div>
                                    </div>
                                    <div class="col-lg-4">
                                      <div class="form-group">
                                        <label class="form-control-label" for="input-country">Postal code</label>
                                        <input type="number" id="input-postal-code" class="form-control form-control-alternative" placeholder="Postal code"/>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <hr class="my-4"/>
                                <h6 class="heading-small text-muted mb-4">About me</h6>
                                <div class="pl-lg-4">
                            <div class="form-group focused">
                                    <label>About Me</label>
                                    <textarea rows="4" class="form-control form-control-alternative" placeholder="A few words about you ..."></textarea>
                                  </div>
                                </div>
                              </form>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
            </div>
        </div>
    </div>
    </Master>
  );
};
export default Profile;