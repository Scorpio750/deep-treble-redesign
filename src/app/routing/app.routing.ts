import { ModuleWithProviders } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

/* Components */
import { HomeComponent } from '../components/home/home.component'
import { MembersComponent } from '../components/members/members.component'
import { HistoryComponent } from '../components/history/history.component'
import { MediaComponent } from '../components/media/media.component'
import { MerchComponent } from '../components/merch/merch.component'
import { AARUComponent } from '../components/aaru/aaru.component'

const appRoutes: Routes = [
	{
		path: '',
		component: HomeComponent
	},
	{
		path: 'members',
		component: MembersComponent
	},
	{
		path: 'history',
		component: HistoryComponent
	},
	{
		path: 'media',
		component: MediaComponent
	},
	{
		path: 'merch',
		component: MerchComponent
	},
	{
		path: 'aaru',
		component: AARUComponent
	}
]

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes)
