import React from 'react'
import Footer from '../Footer'
import Header from '../Header'

const Crm = () => {
    const ActiveProject = [{
        img: "../assets/img/icons/brands/laravel-logo.png",
    }]
    return (
        <>
            <div class="layout-wrapper layout-content-navbar">
                <div class="layout-container">
                    <Header />
                    <div class="layout-page">

                        <nav
                            class="layout-navbar container-xxl navbar navbar-expand-xl navbar-detached align-items-center bg-navbar-theme"
                            id="layout-navbar">
                            <div class="layout-menu-toggle navbar-nav align-items-xl-center me-3 me-xl-0 d-xl-none">
                                <a class="nav-item nav-link px-0 me-xl-4" href="javascript:void(0)">
                                    <i class="ti ti-menu-2 ti-md"></i>
                                </a>
                            </div>

                            <div class="navbar-nav-right d-flex align-items-center" id="navbar-collapse">

                                <div class="navbar-nav align-items-center">
                                    <div class="nav-item navbar-search-wrapper mb-0">
                                        <a class="nav-item nav-link search-toggler d-flex align-items-center px-0" href="javascript:void(0);">
                                            <i class="ti ti-search ti-md me-2 me-lg-4 ti-lg"></i>
                                            <span class="d-none d-md-inline-block text-muted fw-normal">Search (Ctrl+/)</span>
                                        </a>
                                    </div>
                                </div>


                                <ul class="navbar-nav flex-row align-items-center ms-auto">
                                    <li class="nav-item dropdown-language dropdown">
                                        <a
                                            class="nav-link btn btn-text-secondary btn-icon rounded-pill dropdown-toggle hide-arrow"
                                            href="javascript:void(0);"
                                            data-bs-toggle="dropdown">
                                            <i class="ti ti-language rounded-circle ti-md"></i>
                                        </a>
                                        <ul class="dropdown-menu dropdown-menu-end">
                                            <li>
                                                <a class="dropdown-item" href="javascript:void(0);" data-language="en" data-text-direction="ltr">
                                                    <span>English</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a class="dropdown-item" href="javascript:void(0);" data-language="fr" data-text-direction="ltr">
                                                    <span>French</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a class="dropdown-item" href="javascript:void(0);" data-language="ar" data-text-direction="rtl">
                                                    <span>Arabic</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a class="dropdown-item" href="javascript:void(0);" data-language="de" data-text-direction="ltr">
                                                    <span>German</span>
                                                </a>
                                            </li>
                                        </ul>
                                    </li>

                                    <li class="nav-item dropdown-style-switcher dropdown">
                                        <a
                                            class="nav-link btn btn-text-secondary btn-icon rounded-pill dropdown-toggle hide-arrow"
                                            href="javascript:void(0);"
                                            data-bs-toggle="dropdown">
                                            <i class="ti ti-md"></i>
                                        </a>
                                        <ul class="dropdown-menu dropdown-menu-end dropdown-styles">
                                            <li>
                                                <a class="dropdown-item" href="javascript:void(0);" data-theme="light">
                                                    <span class="align-middle"><i class="ti ti-sun ti-md me-3"></i>Light</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a class="dropdown-item" href="javascript:void(0);" data-theme="dark">
                                                    <span class="align-middle"><i class="ti ti-moon-stars ti-md me-3"></i>Dark</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a class="dropdown-item" href="javascript:void(0);" data-theme="system">
                                                    <span class="align-middle"
                                                    ><i class="ti ti-device-desktop-analytics ti-md me-3"></i>System</span
                                                    >
                                                </a>
                                            </li>
                                        </ul>
                                    </li>

                                    <li class="nav-item dropdown-shortcuts navbar-dropdown dropdown">
                                        <a
                                            class="nav-link btn btn-text-secondary btn-icon rounded-pill btn-icon dropdown-toggle hide-arrow"
                                            href="javascript:void(0);"
                                            data-bs-toggle="dropdown"
                                            data-bs-auto-close="outside"
                                            aria-expanded="false">
                                            <i class="ti ti-layout-grid-add ti-md"></i>
                                        </a>
                                        <div class="dropdown-menu dropdown-menu-end p-0">
                                            <div class="dropdown-menu-header border-bottom">
                                                <div class="dropdown-header d-flex align-items-center py-3">
                                                    <h6 class="mb-0 me-auto">Shortcuts</h6>
                                                    <a
                                                        href="javascript:void(0)"
                                                        class="btn btn-text-secondary rounded-pill btn-icon dropdown-shortcuts-add"
                                                        data-bs-toggle="tooltip"
                                                        data-bs-placement="top"
                                                        title="Add shortcuts"
                                                    ><i class="ti ti-plus text-heading"></i
                                                    ></a>
                                                </div>
                                            </div>
                                            <div class="dropdown-shortcuts-list scrollable-container">
                                                <div class="row row-bordered overflow-visible g-0">
                                                    <div class="dropdown-shortcuts-item col">
                                                        <span class="dropdown-shortcuts-icon rounded-circle mb-3">
                                                            <i class="ti ti-calendar ti-26px text-heading"></i>
                                                        </span>
                                                        <a href="app-calendar.html" class="stretched-link">Calendar</a>
                                                        <small>Appointments</small>
                                                    </div>
                                                    <div class="dropdown-shortcuts-item col">
                                                        <span class="dropdown-shortcuts-icon rounded-circle mb-3">
                                                            <i class="ti ti-file-dollar ti-26px text-heading"></i>
                                                        </span>
                                                        <a href="app-invoice-list.html" class="stretched-link">Invoice App</a>
                                                        <small>Manage Accounts</small>
                                                    </div>
                                                </div>
                                                <div class="row row-bordered overflow-visible g-0">
                                                    <div class="dropdown-shortcuts-item col">
                                                        <span class="dropdown-shortcuts-icon rounded-circle mb-3">
                                                            <i class="ti ti-user ti-26px text-heading"></i>
                                                        </span>
                                                        <a href="app-user-list.html" class="stretched-link">User App</a>
                                                        <small>Manage Users</small>
                                                    </div>
                                                    <div class="dropdown-shortcuts-item col">
                                                        <span class="dropdown-shortcuts-icon rounded-circle mb-3">
                                                            <i class="ti ti-users ti-26px text-heading"></i>
                                                        </span>
                                                        <a href="app-access-roles.html" class="stretched-link">Role Management</a>
                                                        <small>Permission</small>
                                                    </div>
                                                </div>
                                                <div class="row row-bordered overflow-visible g-0">
                                                    <div class="dropdown-shortcuts-item col">
                                                        <span class="dropdown-shortcuts-icon rounded-circle mb-3">
                                                            <i class="ti ti-device-desktop-analytics ti-26px text-heading"></i>
                                                        </span>
                                                        <a href="index.html" class="stretched-link">Dashboard</a>
                                                        <small>User Dashboard</small>
                                                    </div>
                                                    <div class="dropdown-shortcuts-item col">
                                                        <span class="dropdown-shortcuts-icon rounded-circle mb-3">
                                                            <i class="ti ti-settings ti-26px text-heading"></i>
                                                        </span>
                                                        <a href="pages-account-settings-account.html" class="stretched-link">Setting</a>
                                                        <small>Account Settings</small>
                                                    </div>
                                                </div>
                                                <div class="row row-bordered overflow-visible g-0">
                                                    <div class="dropdown-shortcuts-item col">
                                                        <span class="dropdown-shortcuts-icon rounded-circle mb-3">
                                                            <i class="ti ti-help ti-26px text-heading"></i>
                                                        </span>
                                                        <a href="pages-faq.html" class="stretched-link">FAQs</a>
                                                        <small>FAQs & Articles</small>
                                                    </div>
                                                    <div class="dropdown-shortcuts-item col">
                                                        <span class="dropdown-shortcuts-icon rounded-circle mb-3">
                                                            <i class="ti ti-square ti-26px text-heading"></i>
                                                        </span>
                                                        <a href="modal-examples.html" class="stretched-link">Modals</a>
                                                        <small>Useful Popups</small>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>

                                    <li class="nav-item dropdown-notifications navbar-dropdown dropdown me-3 me-xl-2">
                                        <a
                                            class="nav-link btn btn-text-secondary btn-icon rounded-pill dropdown-toggle hide-arrow"
                                            href="javascript:void(0);"
                                            data-bs-toggle="dropdown"
                                            data-bs-auto-close="outside"
                                            aria-expanded="false">
                                            <span class="position-relative">
                                                <i class="ti ti-bell ti-md"></i>
                                                <span class="badge rounded-pill bg-danger badge-dot badge-notifications border"></span>
                                            </span>
                                        </a>
                                        <ul class="dropdown-menu dropdown-menu-end p-0">
                                            <li class="dropdown-menu-header border-bottom">
                                                <div class="dropdown-header d-flex align-items-center py-3">
                                                    <h6 class="mb-0 me-auto">Notification</h6>
                                                    <div class="d-flex align-items-center h6 mb-0">
                                                        <span class="badge bg-label-primary me-2">8 New</span>
                                                        <a
                                                            href="javascript:void(0)"
                                                            class="btn btn-text-secondary rounded-pill btn-icon dropdown-notifications-all"
                                                            data-bs-toggle="tooltip"
                                                            data-bs-placement="top"
                                                            title="Mark all as read"
                                                        ><i class="ti ti-mail-opened text-heading"></i
                                                        ></a>
                                                    </div>
                                                </div>
                                            </li>
                                            <li class="dropdown-notifications-list scrollable-container">
                                                <ul class="list-group list-group-flush">
                                                    <li class="list-group-item list-group-item-action dropdown-notifications-item">
                                                        <div class="d-flex">
                                                            <div class="flex-shrink-0 me-3">
                                                                <div class="avatar">
                                                                    <img src="../../assets/img/avatars/1.png" alt class="rounded-circle" />
                                                                </div>
                                                            </div>
                                                            <div class="flex-grow-1">
                                                                <h6 class="small mb-1">Congratulation Lettie 🎉</h6>
                                                                <small class="mb-1 d-block text-body">Won the monthly best seller gold badge</small>
                                                                <small class="text-muted">1h ago</small>
                                                            </div>
                                                            <div class="flex-shrink-0 dropdown-notifications-actions">
                                                                <a href="javascript:void(0)" class="dropdown-notifications-read"
                                                                ><span class="badge badge-dot"></span
                                                                ></a>
                                                                <a href="javascript:void(0)" class="dropdown-notifications-archive"
                                                                ><span class="ti ti-x"></span
                                                                ></a>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li class="list-group-item list-group-item-action dropdown-notifications-item">
                                                        <div class="d-flex">
                                                            <div class="flex-shrink-0 me-3">
                                                                <div class="avatar">
                                                                    <span class="avatar-initial rounded-circle bg-label-danger">CF</span>
                                                                </div>
                                                            </div>
                                                            <div class="flex-grow-1">
                                                                <h6 class="mb-1 small">Charles Franklin</h6>
                                                                <small class="mb-1 d-block text-body">Accepted your connection</small>
                                                                <small class="text-muted">12hr ago</small>
                                                            </div>
                                                            <div class="flex-shrink-0 dropdown-notifications-actions">
                                                                <a href="javascript:void(0)" class="dropdown-notifications-read"
                                                                ><span class="badge badge-dot"></span
                                                                ></a>
                                                                <a href="javascript:void(0)" class="dropdown-notifications-archive"
                                                                ><span class="ti ti-x"></span
                                                                ></a>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li class="list-group-item list-group-item-action dropdown-notifications-item marked-as-read">
                                                        <div class="d-flex">
                                                            <div class="flex-shrink-0 me-3">
                                                                <div class="avatar">
                                                                    <img src="../../assets/img/avatars/2.png" alt class="rounded-circle" />
                                                                </div>
                                                            </div>
                                                            <div class="flex-grow-1">
                                                                <h6 class="mb-1 small">New Message ✉️</h6>
                                                                <small class="mb-1 d-block text-body">You have new message from Natalie</small>
                                                                <small class="text-muted">1h ago</small>
                                                            </div>
                                                            <div class="flex-shrink-0 dropdown-notifications-actions">
                                                                <a href="javascript:void(0)" class="dropdown-notifications-read"
                                                                ><span class="badge badge-dot"></span
                                                                ></a>
                                                                <a href="javascript:void(0)" class="dropdown-notifications-archive"
                                                                ><span class="ti ti-x"></span
                                                                ></a>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li class="list-group-item list-group-item-action dropdown-notifications-item">
                                                        <div class="d-flex">
                                                            <div class="flex-shrink-0 me-3">
                                                                <div class="avatar">
                                                                    <span class="avatar-initial rounded-circle bg-label-success"
                                                                    ><i class="ti ti-shopping-cart"></i
                                                                    ></span>
                                                                </div>
                                                            </div>
                                                            <div class="flex-grow-1">
                                                                <h6 class="mb-1 small">Whoo! You have new order 🛒</h6>
                                                                <small class="mb-1 d-block text-body">ACME Inc. made new order $1,154</small>
                                                                <small class="text-muted">1 day ago</small>
                                                            </div>
                                                            <div class="flex-shrink-0 dropdown-notifications-actions">
                                                                <a href="javascript:void(0)" class="dropdown-notifications-read"
                                                                ><span class="badge badge-dot"></span
                                                                ></a>
                                                                <a href="javascript:void(0)" class="dropdown-notifications-archive"
                                                                ><span class="ti ti-x"></span
                                                                ></a>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li class="list-group-item list-group-item-action dropdown-notifications-item marked-as-read">
                                                        <div class="d-flex">
                                                            <div class="flex-shrink-0 me-3">
                                                                <div class="avatar">
                                                                    <img src="../../assets/img/avatars/9.png" alt class="rounded-circle" />
                                                                </div>
                                                            </div>
                                                            <div class="flex-grow-1">
                                                                <h6 class="mb-1 small">Application has been approved 🚀</h6>
                                                                <small class="mb-1 d-block text-body"
                                                                >Your ABC project application has been approved.</small
                                                                >
                                                                <small class="text-muted">2 days ago</small>
                                                            </div>
                                                            <div class="flex-shrink-0 dropdown-notifications-actions">
                                                                <a href="javascript:void(0)" class="dropdown-notifications-read"
                                                                ><span class="badge badge-dot"></span
                                                                ></a>
                                                                <a href="javascript:void(0)" class="dropdown-notifications-archive"
                                                                ><span class="ti ti-x"></span
                                                                ></a>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li class="list-group-item list-group-item-action dropdown-notifications-item marked-as-read">
                                                        <div class="d-flex">
                                                            <div class="flex-shrink-0 me-3">
                                                                <div class="avatar">
                                                                    <span class="avatar-initial rounded-circle bg-label-success"
                                                                    ><i class="ti ti-chart-pie"></i
                                                                    ></span>
                                                                </div>
                                                            </div>
                                                            <div class="flex-grow-1">
                                                                <h6 class="mb-1 small">Monthly report is generated</h6>
                                                                <small class="mb-1 d-block text-body">July monthly financial report is generated </small>
                                                                <small class="text-muted">3 days ago</small>
                                                            </div>
                                                            <div class="flex-shrink-0 dropdown-notifications-actions">
                                                                <a href="javascript:void(0)" class="dropdown-notifications-read"
                                                                ><span class="badge badge-dot"></span
                                                                ></a>
                                                                <a href="javascript:void(0)" class="dropdown-notifications-archive"
                                                                ><span class="ti ti-x"></span
                                                                ></a>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li class="list-group-item list-group-item-action dropdown-notifications-item marked-as-read">
                                                        <div class="d-flex">
                                                            <div class="flex-shrink-0 me-3">
                                                                <div class="avatar">
                                                                    <img src="../../assets/img/avatars/5.png" alt class="rounded-circle" />
                                                                </div>
                                                            </div>
                                                            <div class="flex-grow-1">
                                                                <h6 class="mb-1 small">Send connection request</h6>
                                                                <small class="mb-1 d-block text-body">Peter sent you connection request</small>
                                                                <small class="text-muted">4 days ago</small>
                                                            </div>
                                                            <div class="flex-shrink-0 dropdown-notifications-actions">
                                                                <a href="javascript:void(0)" class="dropdown-notifications-read"
                                                                ><span class="badge badge-dot"></span
                                                                ></a>
                                                                <a href="javascript:void(0)" class="dropdown-notifications-archive"
                                                                ><span class="ti ti-x"></span
                                                                ></a>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li class="list-group-item list-group-item-action dropdown-notifications-item">
                                                        <div class="d-flex">
                                                            <div class="flex-shrink-0 me-3">
                                                                <div class="avatar">
                                                                    <img src="../../assets/img/avatars/6.png" alt class="rounded-circle" />
                                                                </div>
                                                            </div>
                                                            <div class="flex-grow-1">
                                                                <h6 class="mb-1 small">New message from Jane</h6>
                                                                <small class="mb-1 d-block text-body">Your have new message from Jane</small>
                                                                <small class="text-muted">5 days ago</small>
                                                            </div>
                                                            <div class="flex-shrink-0 dropdown-notifications-actions">
                                                                <a href="javascript:void(0)" class="dropdown-notifications-read"
                                                                ><span class="badge badge-dot"></span
                                                                ></a>
                                                                <a href="javascript:void(0)" class="dropdown-notifications-archive"
                                                                ><span class="ti ti-x"></span
                                                                ></a>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li class="list-group-item list-group-item-action dropdown-notifications-item marked-as-read">
                                                        <div class="d-flex">
                                                            <div class="flex-shrink-0 me-3">
                                                                <div class="avatar">
                                                                    <span class="avatar-initial rounded-circle bg-label-warning"
                                                                    ><i class="ti ti-alert-triangle"></i
                                                                    ></span>
                                                                </div>
                                                            </div>
                                                            <div class="flex-grow-1">
                                                                <h6 class="mb-1 small">CPU is running high</h6>
                                                                <small class="mb-1 d-block text-body"
                                                                >CPU Utilization Percent is currently at 88.63%,</small
                                                                >
                                                                <small class="text-muted">5 days ago</small>
                                                            </div>
                                                            <div class="flex-shrink-0 dropdown-notifications-actions">
                                                                <a href="javascript:void(0)" class="dropdown-notifications-read"
                                                                ><span class="badge badge-dot"></span
                                                                ></a>
                                                                <a href="javascript:void(0)" class="dropdown-notifications-archive"
                                                                ><span class="ti ti-x"></span
                                                                ></a>
                                                            </div>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li class="border-top">
                                                <div class="d-grid p-4">
                                                    <a class="btn btn-primary btn-sm d-flex" href="javascript:void(0);">
                                                        <small class="align-middle">View all notifications</small>
                                                    </a>
                                                </div>
                                            </li>
                                        </ul>
                                    </li>

                                    <li class="nav-item navbar-dropdown dropdown-user dropdown">
                                        <a
                                            class="nav-link dropdown-toggle hide-arrow p-0"
                                            href="javascript:void(0);"
                                            data-bs-toggle="dropdown">
                                            <div class="avatar avatar-online">
                                                <img src="../../assets/img/avatars/1.png" alt class="rounded-circle" />
                                            </div>
                                        </a>
                                        <ul class="dropdown-menu dropdown-menu-end">
                                            <li>
                                                <a class="dropdown-item mt-0" href="pages-account-settings-account.html">
                                                    <div class="d-flex align-items-center">
                                                        <div class="flex-shrink-0 me-2">
                                                            <div class="avatar avatar-online">
                                                                <img src="../../assets/img/avatars/1.png" alt class="rounded-circle" />
                                                            </div>
                                                        </div>
                                                        <div class="flex-grow-1">
                                                            <h6 class="mb-0">John Doe</h6>
                                                            <small class="text-muted">Admin</small>
                                                        </div>
                                                    </div>
                                                </a>
                                            </li>
                                            <li>
                                                <div class="dropdown-divider my-1 mx-n2"></div>
                                            </li>
                                            <li>
                                                <a class="dropdown-item" href="pages-profile-user.html">
                                                    <i class="ti ti-user me-3 ti-md"></i><span class="align-middle">My Profile</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a class="dropdown-item" href="pages-account-settings-account.html">
                                                    <i class="ti ti-settings me-3 ti-md"></i><span class="align-middle">Settings</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a class="dropdown-item" href="pages-account-settings-billing.html">
                                                    <span class="d-flex align-items-center align-middle">
                                                        <i class="flex-shrink-0 ti ti-file-dollar me-3 ti-md"></i
                                                        ><span class="flex-grow-1 align-middle">Billing</span>
                                                        <span class="flex-shrink-0 badge bg-danger d-flex align-items-center justify-content-center"
                                                        >4</span
                                                        >
                                                    </span>
                                                </a>
                                            </li>
                                            <li>
                                                <div class="dropdown-divider my-1 mx-n2"></div>
                                            </li>
                                            <li>
                                                <a class="dropdown-item" href="pages-pricing.html">
                                                    <i class="ti ti-currency-dollar me-3 ti-md"></i><span class="align-middle">Pricing</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a class="dropdown-item" href="pages-faq.html">
                                                    <i class="ti ti-question-mark me-3 ti-md"></i><span class="align-middle">FAQ</span>
                                                </a>
                                            </li>
                                            <li>
                                                <div class="d-grid px-2 pt-2 pb-1">
                                                    <a class="btn btn-sm btn-danger d-flex" href="auth-login-cover.html" target="_blank">
                                                        <small class="align-middle">Logout</small>
                                                        <i class="ti ti-logout ms-2 ti-14px"></i>
                                                    </a>
                                                </div>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>

                            <div class="navbar-search-wrapper search-input-wrapper d-none">
                                <input
                                    type="text"
                                    class="form-control search-input container-xxl border-0"
                                    placeholder="Search..."
                                    aria-label="Search..." />
                                <i class="ti ti-x search-toggler cursor-pointer"></i>
                            </div>
                        </nav>


                        <div class="content-wrapper">

                            <div class="container-xxl flex-grow-1 container-p-y">
                                <div class="row g-6">
                                    <div class="col-xxl-2 col-md-4 col-sm-6">
                                        <div class="card h-100">
                                            <div class="card-header pb-3">
                                                <h5 class="card-title mb-1">Order</h5>
                                                <p class="card-subtitle">Last week</p>
                                            </div>
                                            <div class="card-body">
                                                <div id="ordersLastWeek"></div>
                                                <div class="d-flex justify-content-between align-items-center gap-3">
                                                    <h4 class="mb-0">124k</h4>
                                                    <small class="text-success">+12.6%</small>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="col-xxl-2 col-md-4 col-sm-6">
                                        <div class="card h-100">
                                            <div class="card-header pb-0">
                                                <h5 class="card-title mb-1">Sales</h5>
                                                <p class="card-subtitle">Last Year</p>
                                            </div>
                                            <div id="salesLastYear"></div>
                                            <div class="card-body pt-0">
                                                <div class="d-flex justify-content-between align-items-center mt-3 gap-3">
                                                    <h4 class="mb-0">175k</h4>
                                                    <small class="text-danger">-16.2%</small>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="col-xxl-2 col-md-4 col-6">
                                        <div class="card h-100">
                                            <div class="card-body">
                                                <div class="badge p-2 bg-label-danger mb-3 rounded">
                                                    <i class="ti ti-credit-card ti-28px"></i>
                                                </div>
                                                <h5 class="card-title mb-1">Total Profit</h5>
                                                <p class="card-subtitle">Last week</p>
                                                <p class="text-heading mb-3 mt-1">1.28k</p>
                                                <div>
                                                    <span class="badge bg-label-danger">-12.2%</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="col-xxl-2 col-md-5 col-6">
                                        <div class="card h-100">
                                            <div class="card-body">
                                                <div class="badge p-2 bg-label-success mb-3 rounded">
                                                    <i class="ti ti-credit-card ti-28px"></i>
                                                </div>
                                                <h5 class="card-title mb-1">Total Sales</h5>
                                                <p class="card-subtitle">Last week</p>
                                                <p class="text-heading mb-3 mt-1">24.67k</p>
                                                <div>
                                                    <span class="badge bg-label-success">+24.5%</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="col-xxl-4 col-md-7">
                                        <div class="card h-100">
                                            <div class="card-body d-flex justify-content-between">
                                                <div class="d-flex flex-column me-xl-7">
                                                    <div class="card-title mb-auto">
                                                        <h5 class="mb-2 text-nowrap">Revenue Growth</h5>
                                                        <p class="mb-0">Weekly Report</p>
                                                    </div>
                                                    <div class="chart-statistics">
                                                        <h3 class="card-title mb-1">$4,673</h3>
                                                        <span class="badge bg-label-success">+15.2%</span>
                                                    </div>
                                                </div>
                                                <div id="revenueGrowth"></div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="col-xl-8 col-12">
                                        <div class="card">
                                            <div class="card-header d-flex justify-content-between">
                                                <div class="card-title m-0">
                                                    <h5 class="mb-1">Earning Reports</h5>
                                                    <p class="card-subtitle">Yearly Earnings Overview</p>
                                                </div>
                                                <div class="dropdown">
                                                    <button
                                                        class="btn btn-text-secondary rounded-pill text-muted border-0 p-2 me-n1"
                                                        type="button"
                                                        id="earningReportsTabsId"
                                                        data-bs-toggle="dropdown"
                                                        aria-haspopup="true"
                                                        aria-expanded="false">
                                                        <i class="ti ti-dots-vertical ti-md text-muted"></i>
                                                    </button>
                                                    <div class="dropdown-menu dropdown-menu-end" aria-labelledby="earningReportsTabsId">
                                                        <a class="dropdown-item" href="javascript:void(0);">View More</a>
                                                        <a class="dropdown-item" href="javascript:void(0);">Delete</a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="card-body">
                                                <ul class="nav nav-tabs widget-nav-tabs pb-8 gap-4 mx-1 d-flex flex-nowrap" role="tablist">
                                                    <li class="nav-item">
                                                        <a
                                                            href="javascript:void(0);"
                                                            class="nav-link btn active d-flex flex-column align-items-center justify-content-center"
                                                            role="tab"
                                                            data-bs-toggle="tab"
                                                            data-bs-target="#navs-orders-id"
                                                            aria-controls="navs-orders-id"
                                                            aria-selected="true">
                                                            <div class="badge bg-label-secondary rounded p-2">
                                                                <i class="ti ti-shopping-cart ti-md"></i>
                                                            </div>
                                                            <h6 class="tab-widget-title mb-0 mt-2">Orders</h6>
                                                        </a>
                                                    </li>
                                                    <li class="nav-item">
                                                        <a
                                                            href="javascript:void(0);"
                                                            class="nav-link btn d-flex flex-column align-items-center justify-content-center"
                                                            role="tab"
                                                            data-bs-toggle="tab"
                                                            data-bs-target="#navs-sales-id"
                                                            aria-controls="navs-sales-id"
                                                            aria-selected="false">
                                                            <div class="badge bg-label-secondary rounded p-2">
                                                                <i class="ti ti-chart-bar ti-md"></i>
                                                            </div>
                                                            <h6 class="tab-widget-title mb-0 mt-2">Sales</h6>
                                                        </a>
                                                    </li>
                                                    <li class="nav-item">
                                                        <a
                                                            href="javascript:void(0);"
                                                            class="nav-link btn d-flex flex-column align-items-center justify-content-center"
                                                            role="tab"
                                                            data-bs-toggle="tab"
                                                            data-bs-target="#navs-profit-id"
                                                            aria-controls="navs-profit-id"
                                                            aria-selected="false">
                                                            <div class="badge bg-label-secondary rounded p-2">
                                                                <i class="ti ti-currency-dollar ti-md"></i>
                                                            </div>
                                                            <h6 class="tab-widget-title mb-0 mt-2">Profit</h6>
                                                        </a>
                                                    </li>
                                                    <li class="nav-item">
                                                        <a
                                                            href="javascript:void(0);"
                                                            class="nav-link btn d-flex flex-column align-items-center justify-content-center"
                                                            role="tab"
                                                            data-bs-toggle="tab"
                                                            data-bs-target="#navs-income-id"
                                                            aria-controls="navs-income-id"
                                                            aria-selected="false">
                                                            <div class="badge bg-label-secondary rounded p-2">
                                                                <i class="ti ti-chart-pie-2 ti-md"></i>
                                                            </div>
                                                            <h6 class="tab-widget-title mb-0 mt-2">Income</h6>
                                                        </a>
                                                    </li>
                                                    <li class="nav-item">
                                                        <a
                                                            href="javascript:void(0);"
                                                            class="nav-link btn d-flex align-items-center justify-content-center disabled"
                                                            role="tab"
                                                            data-bs-toggle="tab"
                                                            aria-selected="false">
                                                            <div class="badge bg-label-secondary rounded p-2"><i class="ti ti-plus ti-md"></i></div>
                                                        </a>
                                                    </li>
                                                </ul>
                                                <div class="tab-content p-0 ms-0 ms-sm-2">
                                                    <div class="tab-pane fade show active" id="navs-orders-id" role="tabpanel">
                                                        <div id="earningReportsTabsOrders"></div>
                                                    </div>
                                                    <div class="tab-pane fade" id="navs-sales-id" role="tabpanel">
                                                        <div id="earningReportsTabsSales"></div>
                                                    </div>
                                                    <div class="tab-pane fade" id="navs-profit-id" role="tabpanel">
                                                        <div id="earningReportsTabsProfit"></div>
                                                    </div>
                                                    <div class="tab-pane fade" id="navs-income-id" role="tabpanel">
                                                        <div id="earningReportsTabsIncome"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="col-xl-4 col-md-6">
                                        <div class="card h-100">
                                            <div class="card-header d-flex justify-content-between pb-4">
                                                <div class="card-title mb-0">
                                                    <h5 class="mb-1">Sales</h5>
                                                    <p class="card-subtitle">Last 6 Months</p>
                                                </div>
                                                <div class="dropdown">
                                                    <button
                                                        class="btn btn-text-secondary rounded-pill text-muted border-0 p-2 me-n1"
                                                        type="button"
                                                        id="salesLastMonthMenu"
                                                        data-bs-toggle="dropdown"
                                                        aria-haspopup="true"
                                                        aria-expanded="false">
                                                        <i class="ti ti-dots-vertical ti-md text-muted"></i>
                                                    </button>
                                                    <div class="dropdown-menu dropdown-menu-end" aria-labelledby="salesLastMonthMenu">
                                                        <a class="dropdown-item" href="javascript:void(0);">View More</a>
                                                        <a class="dropdown-item" href="javascript:void(0);">Delete</a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="card-body">
                                                <div id="salesLastMonth"></div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="col-xxl-4 col-md-6">
                                        <div class="card h-100">
                                            <div class="card-header d-flex justify-content-between">
                                                <div class="card-title mb-0">
                                                    <h5 class="mb-1">Sales by Countries</h5>
                                                    <p class="card-subtitle">Monthly Sales Overview</p>
                                                </div>
                                                <div class="dropdown">
                                                    <button
                                                        class="btn btn-text-secondary rounded-pill text-muted border-0 p-2 me-n1"
                                                        type="button"
                                                        id="salesByCountry"
                                                        data-bs-toggle="dropdown"
                                                        aria-haspopup="true"
                                                        aria-expanded="false">
                                                        <i class="ti ti-dots-vertical ti-md text-muted"></i>
                                                    </button>
                                                    <div class="dropdown-menu dropdown-menu-end" aria-labelledby="salesByCountry">
                                                        <a class="dropdown-item" href="javascript:void(0);">Download</a>
                                                        <a class="dropdown-item" href="javascript:void(0);">Refresh</a>
                                                        <a class="dropdown-item" href="javascript:void(0);">Share</a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="card-body">
                                                <ul class="p-0 m-0">
                                                    <li class="d-flex align-items-center mb-4">
                                                        <div class="avatar flex-shrink-0 me-4">
                                                            <i class="fis fi fi-us rounded-circle fs-2"></i>
                                                        </div>
                                                        <div class="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                                                            <div class="me-2">
                                                                <div class="d-flex align-items-center">
                                                                    <h6 class="mb-0 me-1">$8,567k</h6>
                                                                </div>
                                                                <small class="text-body">United states</small>
                                                            </div>
                                                            <div class="user-progress">
                                                                <p class="text-success fw-medium mb-0 d-flex align-items-center gap-1">
                                                                    <i class="ti ti-chevron-up"></i>
                                                                    25.8%
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li class="d-flex align-items-center mb-4">
                                                        <div class="avatar flex-shrink-0 me-4">
                                                            <i class="fis fi fi-br rounded-circle fs-2"></i>
                                                        </div>
                                                        <div class="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                                                            <div class="me-2">
                                                                <div class="d-flex align-items-center">
                                                                    <h6 class="mb-0 me-1">$2,415k</h6>
                                                                </div>
                                                                <small class="text-body">Brazil</small>
                                                            </div>
                                                            <div class="user-progress">
                                                                <p class="text-danger fw-medium mb-0 d-flex align-items-center gap-1">
                                                                    <i class="ti ti-chevron-down"></i>
                                                                    6.2%
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li class="d-flex align-items-center mb-4">
                                                        <div class="avatar flex-shrink-0 me-4">
                                                            <i class="fis fi fi-in rounded-circle fs-2"></i>
                                                        </div>
                                                        <div class="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                                                            <div class="me-2">
                                                                <div class="d-flex align-items-center">
                                                                    <h6 class="mb-0 me-1">$865k</h6>
                                                                </div>
                                                                <small class="text-body">India</small>
                                                            </div>
                                                            <div class="user-progress">
                                                                <p class="text-success fw-medium mb-0 d-flex align-items-center gap-1">
                                                                    <i class="ti ti-chevron-up"></i>
                                                                    12.4%
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li class="d-flex align-items-center mb-4">
                                                        <div class="avatar flex-shrink-0 me-4">
                                                            <i class="fis fi fi-au rounded-circle fs-2"></i>
                                                        </div>
                                                        <div class="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                                                            <div class="me-2">
                                                                <div class="d-flex align-items-center">
                                                                    <h6 class="mb-0 me-1">$745k</h6>
                                                                </div>
                                                                <small class="text-body">Australia</small>
                                                            </div>
                                                            <div class="user-progress">
                                                                <p class="text-danger fw-medium mb-0 d-flex align-items-center gap-1">
                                                                    <i class="ti ti-chevron-down"></i>
                                                                    11.9%
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li class="d-flex align-items-center mb-4">
                                                        <div class="avatar flex-shrink-0 me-4">
                                                            <i class="fis fi fi-fr rounded-circle fs-2"></i>
                                                        </div>
                                                        <div class="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                                                            <div class="me-2">
                                                                <div class="d-flex align-items-center">
                                                                    <h6 class="mb-0 me-1">$45</h6>
                                                                </div>
                                                                <small class="text-body">France</small>
                                                            </div>
                                                            <div class="user-progress">
                                                                <p class="text-success fw-medium mb-0 d-flex align-items-center gap-1">
                                                                    <i class="ti ti-chevron-up"></i>
                                                                    16.2%
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li class="d-flex align-items-center">
                                                        <div class="avatar flex-shrink-0 me-4">
                                                            <i class="fis fi fi-cn rounded-circle fs-2"></i>
                                                        </div>
                                                        <div class="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                                                            <div class="me-2">
                                                                <div class="d-flex align-items-center">
                                                                    <h6 class="mb-0 me-1">$12k</h6>
                                                                </div>
                                                                <small class="text-body">China</small>
                                                            </div>
                                                            <div class="user-progress">
                                                                <p class="text-success fw-medium mb-0 d-flex align-items-center gap-1">
                                                                    <i class="ti ti-chevron-up"></i>
                                                                    14.8%
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="col-xxl-4 col-md-6">
                                        <div class="card h-100">
                                            <div class="card-header d-flex justify-content-between">
                                                <h5 class="mb-0 card-title">Project Status</h5>
                                                <div class="dropdown">
                                                    <button
                                                        class="btn btn-text-secondary rounded-pill text-muted border-0 p-2 me-n1"
                                                        type="button"
                                                        id="projectStatusId"
                                                        data-bs-toggle="dropdown"
                                                        aria-haspopup="true"
                                                        aria-expanded="false">
                                                        <i class="ti ti-dots-vertical ti-md text-muted"></i>
                                                    </button>
                                                    <div class="dropdown-menu dropdown-menu-end" aria-labelledby="projectStatusId">
                                                        <a class="dropdown-item" href="javascript:void(0);">View More</a>
                                                        <a class="dropdown-item" href="javascript:void(0);">Delete</a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="card-body">
                                                <div class="d-flex align-items-start">
                                                    <div class="badge rounded bg-label-warning p-2 me-3 rounded">
                                                        <i class="ti ti-currency-dollar ti-lg"></i>
                                                    </div>
                                                    <div class="d-flex justify-content-between w-100 gap-2 align-items-center">
                                                        <div class="me-2">
                                                            <h6 class="mb-0">$4,3742</h6>
                                                            <small class="text-body">Your Earnings</small>
                                                        </div>
                                                        <h6 class="mb-0 text-success">+10.2%</h6>
                                                    </div>
                                                </div>
                                                <div id="projectStatusChart"></div>
                                                <div class="d-flex justify-content-between mb-4">
                                                    <h6 class="mb-0">Donates</h6>
                                                    <div class="d-flex">
                                                        <p class="mb-0 me-4">$756.26</p>
                                                        <p class="mb-0 text-danger">-139.34</p>
                                                    </div>
                                                </div>
                                                <div class="d-flex justify-content-between">
                                                    <h6 class="mb-0">Podcasts</h6>
                                                    <div class="d-flex">
                                                        <p class="mb-0 me-4">$2,207.03</p>
                                                        <p class="mb-0 text-success">+576.24</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="col-xxl-4 col-md-6">
                                        <div class="card h-100">
                                            <div class="card-header d-flex justify-content-between">
                                                <div class="card-title mb-0">
                                                    <h5 class="mb-1">Active Project</h5>
                                                    <p class="card-subtitle">Average 72% Completed</p>
                                                </div>
                                                <div class="dropdown">
                                                    <button
                                                        class="btn btn-text-secondary rounded-pill text-muted border-0 p-2 me-n1"
                                                        type="button"
                                                        id="activeProjects"
                                                        data-bs-toggle="dropdown"
                                                        aria-haspopup="true"
                                                        aria-expanded="false">
                                                        <i class="ti ti-dots-vertical ti-md text-muted"></i>
                                                    </button>
                                                    <div class="dropdown-menu dropdown-menu-end" aria-labelledby="activeProjects">
                                                        <a class="dropdown-item" href="javascript:void(0);">Refresh</a>
                                                        <a class="dropdown-item" href="javascript:void(0);">Download</a>
                                                        <a class="dropdown-item" href="javascript:void(0);">View All</a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="card-body">
                                                {
                                                    ActiveProject.map((key, value) => {

                                                        <ul class="p-0 m-0">
                                                            <li class="mb-4 d-flex">
                                                                <div class="d-flex w-50 align-items-center me-4">
                                                                    <img ></img>
                                                                    <div>
                                                                        <h6 class="mb-0">{value.img}</h6>
                                                                        <small class="text-body"></small>
                                                                    </div>
                                                                </div>
                                                                <div class="d-flex flex-grow-1 align-items-center">
                                                                    <div class="progress w-100 me-4" style={{ height: "8px" }} >
                                                                        <div
                                                                            class="progress-bar bg-danger"
                                                                            role="progressbar"
                                                                            style={{ width: "65%" }}
                                                                            aria-valuenow="54"
                                                                            aria-valuemin="0"
                                                                            aria-valuemax="100"></div>
                                                                    </div>
                                                                    <span class="text-muted"></span>
                                                                </div>
                                                            </li>
                                                        </ul>

                                                    })
                                                }
                                            </div>
                                            {/* <div class="card-body">
                                                <ul class="p-0 m-0">
                                                    <li class="mb-4 d-flex">
                                                        <div class="d-flex w-50 align-items-center me-4">
                                                            <img
                                                                src="../../assets/img/icons/brands/laravel-logo.png"
                                                                alt="laravel-logo"
                                                                class="me-4"
                                                                width="35" />
                                                            <div>
                                                                <h6 class="mb-0">Laravel</h6>
                                                                <small class="text-body">eCommerce</small>
                                                            </div>
                                                        </div>
                                                        <div class="d-flex flex-grow-1 align-items-center">
                                                            <div class="progress w-100 me-4" style={{ height: "8px" }}>
                                                                <div
                                                                    class="progress-bar bg-danger"
                                                                    role="progressbar"
                                                                    style={{ width: "65%" }}
                                                                    aria-valuenow="54"
                                                                    aria-valuemin="0"
                                                                    aria-valuemax="100"></div>
                                                            </div>
                                                            <span class="text-muted">65%</span>
                                                        </div>
                                                    </li>
                                                    <li class="mb-4 d-flex">
                                                        <div class="d-flex w-50 align-items-center me-4">
                                                            <img
                                                                src="../../assets/img/icons/brands/figma-logo.png"
                                                                alt="figma-logo"
                                                                class="me-4"
                                                                width="35" />
                                                            <div>
                                                                <h6 class="mb-0">Figma</h6>
                                                                <small class="text-body">App UI Kit</small>
                                                            </div>
                                                        </div>
                                                        <div class="d-flex flex-grow-1 align-items-center">
                                                            <div class="progress w-100 me-4" style={{ height: "8px" }}>
                                                                <div
                                                                    class="progress-bar bg-primary"
                                                                    role="progressbar"
                                                                    style={{ width: "86%" }}
                                                                    aria-valuenow="86"
                                                                    aria-valuemin="0"
                                                                    aria-valuemax="100"></div>
                                                            </div>
                                                            <span class="text-muted">86%</span>
                                                        </div>
                                                    </li>
                                                    <li class="mb-4 d-flex">
                                                        <div class="d-flex w-50 align-items-center me-4">
                                                            <img
                                                                src="../../assets/img/icons/brands/vue-logo.png"
                                                                alt="vue-logo"
                                                                class="me-4"
                                                                width="35" />
                                                            <div>
                                                                <h6 class="mb-0">VueJs</h6>
                                                                <small class="text-body">Calendar App</small>
                                                            </div>
                                                        </div>
                                                        <div class="d-flex flex-grow-1 align-items-center">
                                                            <div class="progress w-100 me-4" style={{ height: "8px" }}>
                                                                <div
                                                                    class="progress-bar bg-success"
                                                                    role="progressbar"
                                                                    style={{ width: "90%" }}
                                                                    aria-valuenow="90"
                                                                    aria-valuemin="0"
                                                                    aria-valuemax="100"></div>
                                                            </div>
                                                            <span class="text-muted">90%</span>
                                                        </div>
                                                    </li>
                                                    <li class="mb-4 d-flex">
                                                        <div class="d-flex w-50 align-items-center me-4">
                                                            <img
                                                                src="../../assets/img/icons/brands/react-logo.png"
                                                                alt="react-logo"
                                                                class="me-4"
                                                                width="35" />
                                                            <div>
                                                                <h6 class="mb-0">React</h6>
                                                                <small class="text-body">Dashboard</small>
                                                            </div>
                                                        </div>
                                                        <div class="d-flex flex-grow-1 align-items-center">
                                                            <div class="progress w-100 me-4" style={{ height: "8px" }}>
                                                                <div
                                                                    class="progress-bar bg-info"
                                                                    role="progressbar"
                                                                    style={{ width: "37%" }}
                                                                    aria-valuenow="37"
                                                                    aria-valuemin="0"
                                                                    aria-valuemax="100"></div>
                                                            </div>
                                                            <span class="text-muted">37%</span>
                                                        </div>
                                                    </li>
                                                    <li class="mb-4 d-flex">
                                                        <div class="d-flex w-50 align-items-center me-4">
                                                            <img
                                                                src="../../assets/img/icons/brands/bootstrap-logo.png"
                                                                alt="bootstrap-logo"
                                                                class="me-4"
                                                                width="35" />
                                                            <div>
                                                                <h6 class="mb-0">Bootstrap</h6>
                                                                <small class="text-body">Website</small>
                                                            </div>
                                                        </div>
                                                        <div class="d-flex flex-grow-1 align-items-center">
                                                            <div class="progress w-100 me-4" style={{ height: "8px" }}>
                                                                <div
                                                                    class="progress-bar bg-primary"
                                                                    role="progressbar"
                                                                    style={{ width: "22%" }}
                                                                    aria-valuenow="22"
                                                                    aria-valuemin="0"
                                                                    aria-valuemax="100"></div>
                                                            </div>
                                                            <span class="text-muted">22%</span>
                                                        </div>
                                                    </li>
                                                    <li class="d-flex">
                                                        <div class="d-flex w-50 align-items-center me-4">
                                                            <img
                                                                src="../../assets/img/icons/brands/sketch-logo.png"
                                                                alt="sketch-logo"
                                                                class="me-4"
                                                                width="35" />
                                                            <div>
                                                                <h6 class="mb-0">Sketch</h6>
                                                                <small class="text-body">Website Design</small>
                                                            </div>
                                                        </div>
                                                        <div class="d-flex flex-grow-1 align-items-center">
                                                            <div class="progress w-100 me-4" style={{ height: "8px" }}>
                                                                <div
                                                                    class="progress-bar bg-warning"
                                                                    role="progressbar"
                                                                    style={{ width: "29%" }}
                                                                    aria-valuenow="29"
                                                                    aria-valuemin="0"
                                                                    aria-valuemax="100"></div>
                                                            </div>
                                                            <span class="text-muted">29%</span>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div> */}
                                        </div>
                                    </div>

                                    <div class="col-xl-6">
                                        <div class="card h-100">
                                            <div class="card-header d-flex justify-content-between align-items-center">
                                                <h5 class="card-title m-0 me-2">Last Transaction</h5>
                                                <div class="dropdown">
                                                    <button
                                                        class="btn btn-text-secondary rounded-pill text-muted border-0 p-2 me-n1"
                                                        type="button"
                                                        id="teamMemberList"
                                                        data-bs-toggle="dropdown"
                                                        aria-haspopup="true"
                                                        aria-expanded="false">
                                                        <i class="ti ti-dots-vertical ti-md text-muted"></i>
                                                    </button>
                                                    <div class="dropdown-menu dropdown-menu-end" aria-labelledby="teamMemberList">
                                                        <a class="dropdown-item" href="javascript:void(0);">Download</a>
                                                        <a class="dropdown-item" href="javascript:void(0);">Refresh</a>
                                                        <a class="dropdown-item" href="javascript:void(0);">Share</a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="table-responsive">
                                                <table class="table table-borderless border-top">
                                                    <thead class="border-bottom">
                                                        <tr>
                                                            <th>CARD</th>
                                                            <th>DATE</th>
                                                            <th>STATUS</th>
                                                            <th>TREND</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td class="pt-5">
                                                                <div class="d-flex justify-content-start align-items-center">
                                                                    <div class="me-4">
                                                                        <img src="../../assets/img/icons/payments/visa-img.png" alt="Visa" height="30" />
                                                                    </div>
                                                                    <div class="d-flex flex-column">
                                                                        <p class="mb-0 text-heading">*4230</p>
                                                                        <small class="text-body">Credit</small>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                            <td class="pt-5">
                                                                <div class="d-flex flex-column">
                                                                    <p class="mb-0 text-heading">Sent</p>
                                                                    <small class="text-body text-nowrap">17 Mar 2022</small>
                                                                </div>
                                                            </td>
                                                            <td class="pt-5"><span class="badge bg-label-success">Verified</span></td>
                                                            <td class="pt-5">
                                                                <p class="mb-0 text-heading">+$1,678</p>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <div class="d-flex justify-content-start align-items-center">
                                                                    <div class="me-4">
                                                                        <img
                                                                            src="../../assets/img/icons/payments/master-card-img.png"
                                                                            alt="Visa"
                                                                            height="30" />
                                                                    </div>
                                                                    <div class="d-flex flex-column">
                                                                        <p class="mb-0 text-heading">*5578</p>
                                                                        <small class="text-body">Credit</small>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <div class="d-flex flex-column">
                                                                    <p class="mb-0 text-heading">Sent</p>
                                                                    <small class="text-body text-nowrap">12 Feb 2022</small>
                                                                </div>
                                                            </td>
                                                            <td><span class="badge bg-label-danger">Rejected</span></td>
                                                            <td>
                                                                <p class="mb-0 text-heading">-$839</p>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <div class="d-flex justify-content-start align-items-center">
                                                                    <div class="me-4">
                                                                        <img
                                                                            src="../../assets/img/icons/payments/american-express-img.png"
                                                                            alt="Visa"
                                                                            height="30" />
                                                                    </div>
                                                                    <div class="d-flex flex-column">
                                                                        <p class="mb-0 text-heading">*4567</p>
                                                                        <small class="text-body">ATM</small>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <div class="d-flex flex-column">
                                                                    <p class="mb-0 text-heading">Sent</p>
                                                                    <small class="text-body text-nowrap">28 Feb 2022</small>
                                                                </div>
                                                            </td>
                                                            <td><span class="badge bg-label-success">Verified</span></td>
                                                            <td>
                                                                <p class="mb-0 text-heading">+$435</p>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <div class="d-flex justify-content-start align-items-center">
                                                                    <div class="me-4">
                                                                        <img src="../../assets/img/icons/payments/visa-img.png" alt="Visa" height="30" />
                                                                    </div>
                                                                    <div class="d-flex flex-column">
                                                                        <p class="mb-0 text-heading">*5699</p>
                                                                        <small class="text-body">Credit</small>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <div class="d-flex flex-column">
                                                                    <p class="mb-0 text-heading">Sent</p>
                                                                    <small class="text-body text-nowrap">8 Jan 2022</small>
                                                                </div>
                                                            </td>
                                                            <td><span class="badge bg-label-secondary">Pending</span></td>
                                                            <td>
                                                                <p class="mb-0 text-heading">+$2,345</p>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <div class="d-flex justify-content-start align-items-center">
                                                                    <div class="me-4">
                                                                        <img src="../../assets/img/icons/payments/visa-img.png" alt="Visa" height="30" />
                                                                    </div>
                                                                    <div class="d-flex flex-column">
                                                                        <p class="mb-0 text-heading">*5699</p>
                                                                        <small class="text-body">Credit</small>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <div class="d-flex flex-column">
                                                                    <p class="mb-0 text-heading">Sent</p>
                                                                    <small class="text-body text-nowrap">8 Jan 2022</small>
                                                                </div>
                                                            </td>
                                                            <td><span class="badge bg-label-danger">Rejected</span></td>
                                                            <td>
                                                                <p class="mb-0 text-heading">-$234</p>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="col-xxl-6 order-2">
                                        <div class="card h-100">
                                            <div class="card-header d-flex justify-content-between">
                                                <h5 class="card-title m-0 me-2 pt-1 mb-2 d-flex align-items-center">
                                                    <i class="ti ti-list-details me-3"></i> Activity Timeline
                                                </h5>
                                                <div class="dropdown">
                                                    <button
                                                        class="btn btn-text-secondary rounded-pill text-muted border-0 p-2 me-n1"
                                                        type="button"
                                                        id="timelineWapper"
                                                        data-bs-toggle="dropdown"
                                                        aria-haspopup="true"
                                                        aria-expanded="false">
                                                        <i class="ti ti-dots-vertical ti-md text-muted"></i>
                                                    </button>
                                                    <div class="dropdown-menu dropdown-menu-end" aria-labelledby="timelineWapper">
                                                        <a class="dropdown-item" href="javascript:void(0);">Download</a>
                                                        <a class="dropdown-item" href="javascript:void(0);">Refresh</a>
                                                        <a class="dropdown-item" href="javascript:void(0);">Share</a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="card-body pb-xxl-0">
                                                <ul class="timeline mb-0">
                                                    <li class="timeline-item timeline-item-transparent">
                                                        <span class="timeline-point timeline-point-primary"></span>
                                                        <div class="timeline-event">
                                                            <div class="timeline-header mb-3">
                                                                <h6 class="mb-0">12 Invoices have been paid</h6>
                                                                <small class="text-muted">12 min ago</small>
                                                            </div>
                                                            <p class="mb-2">Invoices have been paid to the company</p>
                                                            <div class="d-flex align-items-center mb-1">
                                                                <div class="badge bg-lighter rounded-3">
                                                                    <img src="../../assets//img/icons/misc/pdf.png" alt="img" width="15" class="me-2" />
                                                                    <span class="h6 mb-0 text-body">invoices.pdf</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li class="timeline-item timeline-item-transparent">
                                                        <span class="timeline-point timeline-point-success"></span>
                                                        <div class="timeline-event">
                                                            <div class="timeline-header mb-3">
                                                                <h6 class="mb-0">Client Meeting</h6>
                                                                <small class="text-muted">45 min ago</small>
                                                            </div>
                                                            <p class="mb-2">Project meeting with john @10:15am</p>
                                                            <div class="d-flex justify-content-between flex-wrap gap-2">
                                                                <div class="d-flex flex-wrap align-items-center">
                                                                    <div class="avatar avatar-sm me-2">
                                                                        <img src="../../assets/img/avatars/1.png" alt="Avatar" class="rounded-circle" />
                                                                    </div>
                                                                    <div>
                                                                        <p class="mb-0 small fw-medium">Lester McCarthy (Client)</p>
                                                                        <small>CEO of Pixinvent</small>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li class="timeline-item timeline-item-transparent">
                                                        <span class="timeline-point timeline-point-info"></span>
                                                        <div class="timeline-event">
                                                            <div class="timeline-header mb-3">
                                                                <h6 class="mb-0">Create a new project for client</h6>
                                                                <small class="text-muted">2 Day Ago</small>
                                                            </div>
                                                            <p class="mb-2">6 team members in a project</p>
                                                            <ul class="list-group list-group-flush">
                                                                <li
                                                                    class="list-group-item d-flex justify-content-between align-items-center flex-wrap p-0">
                                                                    <div class="d-flex flex-wrap align-items-center">
                                                                        <ul class="list-unstyled users-list d-flex align-items-center avatar-group m-0 me-2">
                                                                            <li
                                                                                data-bs-toggle="tooltip"
                                                                                data-popup="tooltip-custom"
                                                                                data-bs-placement="top"
                                                                                title="Vinnie Mostowy"
                                                                                class="avatar pull-up">
                                                                                <img class="rounded-circle" src="../../assets/img/avatars/5.png" alt="Avatar" />
                                                                            </li>
                                                                            <li
                                                                                data-bs-toggle="tooltip"
                                                                                data-popup="tooltip-custom"
                                                                                data-bs-placement="top"
                                                                                title="Allen Rieske"
                                                                                class="avatar pull-up">
                                                                                <img class="rounded-circle" src="../../assets/img/avatars/12.png" alt="Avatar" />
                                                                            </li>
                                                                            <li
                                                                                data-bs-toggle="tooltip"
                                                                                data-popup="tooltip-custom"
                                                                                data-bs-placement="top"
                                                                                title="Julee Rossignol"
                                                                                class="avatar pull-up">
                                                                                <img class="rounded-circle" src="../../assets/img/avatars/6.png" alt="Avatar" />
                                                                            </li>
                                                                            <li class="avatar">
                                                                                <span
                                                                                    class="avatar-initial rounded-circle pull-up text-heading"
                                                                                    data-bs-toggle="tooltip"
                                                                                    data-bs-placement="bottom"
                                                                                    title="3 more"
                                                                                >+3</span
                                                                                >
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <Footer />

                            <div class="content-backdrop fade"></div>
                        </div>

                    </div>
                </div>


                <div class="layout-overlay layout-menu-toggle"></div>


                <div class="drag-target"></div>
            </div></>
    )
}

export default Crm;