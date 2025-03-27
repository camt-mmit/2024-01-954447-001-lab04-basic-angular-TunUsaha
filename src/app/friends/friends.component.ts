import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-friends',
  imports: [],
  templateUrl: './friends.component.html',
  styleUrl: './friends.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FriendsComponent {
  friend = [
    {
      firstName: 'Jiramet',
      lastName: 'Ss',
      nickName: 'Pol',
      githubPages: ['Lab02', 'Lab03', 'Lab04'],
    },
    {
      firstName: 'Natchanon',
      lastName: 'Pankaew',
      nickName: 'Nat',
      githubPages: ['Lab02', 'Lab03', 'Lab04'],
    },
  ];
}
