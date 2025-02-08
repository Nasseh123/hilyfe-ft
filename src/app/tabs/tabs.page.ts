import { Title } from "@angular/platform-browser";
import { MainTab as MainTab, SvgIconSet, TabIcons as TabIcons } from "../models/common.model";
import { SvgiconsService } from "./../services/common/svgicons.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-tabs",
  templateUrl: "tabs.page.html",
  styleUrls: ["tabs.page.scss"],
  standalone: false,
})
export class TabsPage implements OnInit {
  selectedTab: MainTab = MainTab.Home; // Set default active tab
  tabsIcons!: SvgIconSet;

  MainTab = MainTab;
  tabsMenu = [
    {
      tab: MainTab.Home,

      title: 'Home',
      url: "/tabs/home",
      tabIconActive: 'assets/tabs/home-active.svg',
      tabIconInactive: 'assets/tabs/home-inactive.svg',
    },
    {
      tab: MainTab.Cart,
      title: 'Cart',
      url: "/tabs/cart",
      tabIconActive: 'assets/tabs/cart-active.svg',
      tabIconInactive: 'assets/tabs/cart-inactive.svg',
    },
    {
      tab: MainTab.Profile,
      title: 'Profile',
      url: "/tabs/profile",
      tabIconActive: 'assets/tabs/profile-active.svg',
      tabIconInactive: 'assets/tabs/profile-inactive.svg',
    },
    {
      tab: MainTab.Menu,
      title: 'Menu',
      url: "/tabs/menu",
      tabIconActive: 'assets/tabs/menu-active.svg',
      tabIconInactive: 'assets/tabs/menu-inactive.svg',
    },
  ];
  constructor(private svgIconService: SvgiconsService) {}
  // Set active tab
  setActiveTab(tabName: MainTab) {
    this.selectedTab = tabName;
  }
  ngOnInit(): void {
    // Fetch the icons from the JSON file
    this.svgIconService.getSvgIcons().subscribe((icons) => {

    });
  }
}
