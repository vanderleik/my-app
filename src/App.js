import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div id='wrapper'>
      {/* Sidebar */}
      <ul class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
        {/* Sidebar Brand */}
        <a class="sidebar-brand d-flex align-items-center justify-content-center" href="/">
          <div class="sidebar-brand-icon">
            <i class="fas fa-chart-line"></i>
          </div>
          <div class="sidebar-brand-text mx-3">Admin</div>
        </a>

        {/* Divider */}
        <hr hr class="sidebar-divider my-0" />
        {/* Nav Item - Dashboard */}
        <li class="nav-item active">
          <a class="nav-link" href="/">
            <i class="fas fa-fw fa-tachometer-alt"></i>
            <span>Dashboard</span>
          </a>
        </li>
        
        {/* Divider */}
        <hr class="sidebar-divider"/>   

        {/* Heading      */}
        <div class="sidebar-heading">Actions</div>
        
        {/* Nav Item - Pages */}
        <li class="nav-item">
        <a class="nav-link collapsed" href="/">
					<i class="fas fa-fw fa-folder"></i>
					<span>Pages</span>
        </a>
        </li>

        {/* Nav Item - Charts */}
        <li class="nav-item">
				<a class="nav-link" href="/">
					<i class="fas fa-fw fa-chart-area"></i>
					<span>Charts</span></a>
			  </li>

        {/* Nav Item - Tables */}
        <li class="nav-item">
				<a class="nav-link" href="/">
					<i class="fas fa-fw fa-table"></i>
					<span>Tables</span></a>
			  </li>

        {/* Divider */}
        <hr class="sidebar-divider d-none d-md-block" />  
      </ul>
      {/* End of Sidebar */}

      {/* Content Wrapper */}
      <div id="content-wrapper" class="d-flex flex-column">

      {/* Main Content */}
      <div id="content">

      {/* Topbar */}
      <nav class="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">

      {/* Sidebar Toggle (Topbar) */}
      <button id="sidebarToggleTop" class="btn btn-link d-md-none rounded-circle mr-3">
      <i class="fa fa-bars"></i>
      </button>

      {/* Topbar Navbar */}
      <ul class="navbar-nav ml-auto">

      {/* Nav Item - Alerts */}
      <li class="nav-item dropdown no-arrow mx-1">
        <a class="nav-link dropdown-toggle" href="/" id="alertsDropdown">
          <i class="fas fa-bell fa-fw"></i>
          {/* Counter - Alerts */}
          <span class="badge badge-danger badge-counter">3+</span>
        </a>
      </li>

      {/* Nav Item - Messages */}
      <li class="nav-item dropdown no-arrow mx-1">
        <a class="nav-link dropdown-toggle" href="/" id="messagesDropdown">
          <i class="fas fa-envelope fa-fw"></i>
          {/* Counter - Messages */}
          <span class="badge badge-danger badge-counter">7</span>
        </a>
      </li>

      <div class="topbar-divider d-none d-sm-block"></div>

      {/* Nav Item - User Information */}
      <li class="nav-item dropdown no-arrow">
        <a class="nav-link dropdown-toggle" href="/" id="userDropdown">         
          <span class="mr-2 d-none d-lg-inline text-gray-600 small">Walter White</span>
          <img class="img-profile rounded-circle" src="assets/images/dummy-avatar.jpg" width="60"></img>
        </a>
      </li>
      
      </ul>

      </nav>
      {/* End of Topbar */}

      {/* Begin Page Content */}

      </div>

      </div>

    </div>
    
  );
}

export default App;
