import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
    MatMenuModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatBadgeModule,
    MatSidenavModule,
    MatListModule,
    MatGridListModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatChipsModule,
    MatTooltipModule,
    MatTableModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatExpansionModule
} from '@angular/material';

@NgModule({
    imports: [
        MatMenuModule,
        CommonModule,
        MatButtonModule,
        MatToolbarModule,
        MatIconModule,
        MatSidenavModule,
        MatBadgeModule,
        MatListModule,
        MatGridListModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        MatRadioModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatChipsModule,
        MatTooltipModule,
        MatTableModule,
        MatPaginatorModule,
        MatProgressBarModule,
        MatExpansionModule
    ],
    exports: [
        MatMenuModule,
        MatButtonModule,
        MatToolbarModule,
        MatIconModule,
        MatSidenavModule,
        MatBadgeModule,
        MatListModule,
        MatGridListModule,
        MatInputModule,
        MatFormFieldModule,
        MatSelectModule,
        MatRadioModule,
        MatDatepickerModule,
        MatChipsModule,
        MatTooltipModule,
        MatTableModule,
        MatPaginatorModule,
        MatProgressBarModule,
        MatExpansionModule
    ],
    providers: [
        MatDatepickerModule,
    ]
})

export class AngularMaterialModule { }
