import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
      },
      {
        path: 'details/:noteId',
        loadChildren: () => import('./pages/detail/detail.module').then( m => m.DetailPageModule)
      },
      {
        path: 'edit-note/:noteId',
        loadChildren: () => import('./pages/edit-note/edit-note.module').then( m => m.EditNotePageModule)
      },
    ]
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
