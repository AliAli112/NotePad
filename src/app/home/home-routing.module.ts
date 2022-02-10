import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: HomePage,
    children: [
      {
        path: 'create-note',
        children: [
          {
            path: '',
            loadChildren: () => import('../pages/create-note/create-note.module').then( m => m.CreateNotePageModule)
          },
        ]
      },
      {
        path: 'my-notes',
        children: [
          {
            path: '',
            loadChildren: () => import('../pages/my-notes/my-notes.module').then( m => m.MyNotesPageModule)
          },
          {
            path: '/details/:noteid',
            loadChildren: () => import('../pages/detail/detail.module').then(m => m.DetailPageModule)
          },
        ]
      },
    ]
  },

  {
    path: '',
    redirectTo: '/tabs/my-notes',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
