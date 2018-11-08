import { ActivatedRoute, Params, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { ListItem } from '../../basic-classes/list-item';
import { ListService } from '../../services/list.service';
import { Product } from '../../basic-classes/product';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {
  editForm: FormGroup;
  id: number;
  itemName: string;
  listItem: ListItem;
  title: string;
  itemImage: string;
  itemCategory: string;
  itemAmount: number;
  itemUnit: string;
  itemShop: string;
  itemIsFixedShop: boolean;
  itemNote: string;
  itemInPromotion: boolean;
  itemIsFavourite: boolean;
  favouriteBtn: string;

  constructor(
    private route: ActivatedRoute,
    private listService: ListService,
    private productService: ProductService,
    private router: Router
  ) { } // end constructor

  ngOnInit() {
    this.initialize();
  } // end ngOnInit

  getCategories() {
    return this.productService.getCategories();
  } // end getcategories

  getShops() {
    return this.productService.getShops();
  } // end getShops

  getUnits() {
    return this.productService.getUnits();
  } // end getUnits

  onSubmit() {
    this.getFormData();
    if (this.itemName && this.itemName !== 'Nieuw product') {
      const productIndex = this.productService.getProductIndex(this.itemName);
      const image = this.listItem ? this.listItem.image : '';
      const category = this.itemCategory || 'Andere';
      let product: Product;
      if (productIndex < 0) {
        product = this.productService.addProduct(this.itemName, category, this.itemUnit, image, this.itemNote,
          this.itemShop, this.itemIsFixedShop, this.itemIsFavourite);
      } else {
        product = this.productService.updateProduct(productIndex, category, this.itemUnit, image,
          this.itemNote, this.itemShop, this.itemIsFixedShop);
      }
      this.listService.updateItemInList(this.id, this.itemAmount, this.itemInPromotion, product);
    }

    this.router.navigate(['/lijst']);
  } // end onSubmit

  onDeleteListItem() {
    if (this.listItem) {
      this.listService.removeItemFromList(this.listItem);
    }
    this.router.navigate(['/lijst']);
  } // end onDeleteListItem

  toggleFavourite() {
    this.listService.toggleFavourite(this.listItem);
    this.productService.toggleFavourite(this.listItem.productId);
    this.itemIsFavourite = this.listItem ? this.listItem.isFavourite : false;
    this.favouriteBtn = this.itemIsFavourite ? 'Verwijder uit favorieten' : 'Zet bij favorieten';
  } // end toggleFavourite

  validName(control: FormControl): {[s: string]: boolean} {
    if (control.value === 'Nieuw product') {
      return {'invalidName': true};
    }
    return null;
  } // end validName

  private initialize() {
    this.route.paramMap
      .subscribe(
        (params: Params) => {
          this.id = +params.get('id');
          this.itemName = params.get('name');
          this.listItem = this.listService.getListItem(this.id);
          this.title = this.id >= 0 ? 'Product aanpassen' : 'Nieuw product maken';
          this.itemImage = this.listItem && this.listItem.image ? '/assets/images/' + this.listItem.image
            : '/assets/images/camera.svg'; // Ref: FontAwesome_2018
          this.itemCategory = this.listItem ? this.listItem.category : '';
          this.itemAmount = this.listItem ? this.listItem.amount : 0;
          this.itemUnit = this.listItem ? this.listItem.unit : '';
          this.itemShop = this.listItem ? this.listItem.shop : '';
          this.itemIsFixedShop = this.listItem ? this.listItem.isFixedShop : false;
          this.itemNote = this.listItem ? this.listItem.note : '';
          this.itemInPromotion = this.listItem ? this.listItem.inPromotion : false;
          this.itemIsFavourite = this.listItem ? this.listItem.isFavourite : false;
          this.favouriteBtn = this.itemIsFavourite ? 'Verwijder uit favorieten' : 'Zet bij favorieten';
          this.initializeForm();
        }
      );
  } // end initializeItem

  private initializeForm() {
    this.editForm = new FormGroup({
      'name': new FormControl(this.itemName, [Validators.required, this.validName.bind(this)]),
      'category': new FormControl(this.itemCategory, [Validators.required]),
      'amount': new FormControl(this.itemAmount),
      'unit': new FormControl(this.itemUnit),
      'shop': new FormGroup({
        'shopName': new FormControl(this.itemShop),
        'isFixedShop': new FormControl(this.itemIsFixedShop)
      }),
      'note': new FormGroup({
        'noteContent': new FormControl(this.itemNote),
        'inPromotion': new FormControl(this.itemInPromotion)
      })
    });
  } // end initializeForm

  private getFormData() {
    this.itemName = this.editForm.get('name').value;
    this.itemCategory = this.editForm.get('category').value;
    this.itemAmount = this.editForm.get('amount').value;
    this.itemUnit = this.editForm.get('unit').value;
    this.itemShop = this.editForm.get('shop.shopName').value;
    this.itemIsFixedShop = this.editForm.get('shop.isFixedShop').value;
    console.log('isFixedShop: ', this.itemIsFixedShop);
    this.itemNote = this.editForm.get('note.noteContent').value;
    this.itemInPromotion = this.editForm.get('note.inPromotion').value;
  }
}
