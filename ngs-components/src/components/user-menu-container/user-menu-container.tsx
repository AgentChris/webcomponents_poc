import {Component, h} from '@stencil/core';

@Component({
  tag: "user-menu-container",
  styleUrl: "user-menu.css",
  shadow: false
})

export class UserMenuContainer {
  render() {
    return (
      <div>
        Stories
      </div>
    );
  }
}
