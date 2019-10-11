import {Component, h, Prop} from '@stencil/core';
import '@natgeosociety/ngkit3/dist/main';

@Component({
  tag: "user-menu",
  styleUrl: "user-menu.css",
  shadow: false
})

export class UserMenu {
  /**
   * Profile picture
   */
  @Prop() profile_picture: string;
  /**
   * Menu link
   */
  @Prop() menu_links: string;

  handleLogOutClick() {
    alert("Logging out");
  }

  render() {
    const menu_links_string=JSON.stringify(this.menu_links);
    const mapLinks = JSON.parse(menu_links_string);
    console.log(mapLinks.menuLinks);
    return (
      <div>
        <img src={this.profile_picture} alt="profilPic" />
        <ul>
          <li>a</li>
          {/*{mapLinks.map({} =>(<li>*/}

          {/*  </li>))}*/}
        </ul>
        <button onClick={this.handleLogOutClick} class="ng-button ng-button-primary">
          Log out
        </button>
      </div>
    );
  }
}
