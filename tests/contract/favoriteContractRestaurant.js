import FavoriteRestaurantIdb from "../../src/scripts/data/favorite-restaurant-idb";

const itActsAsFavoriteRestaurantModel = (FavoriteRestaurantIdb) => {
  it("Should Return The Restaurant That Has Been Added", async () => {
    FavoriteRestaurantIdb.putRestaurant({ id: 1 });
    FavoriteRestaurantIdb.putRestaurant({ id: 2 });

    expect(await FavoriteRestaurantIdb.getRestaurant(1)).toEqual({ id: 1 });
    expect(await FavoriteRestaurantIdb.getRestaurant(2)).toEqual({ id: 2 });
    expect(await FavoriteRestaurantIdb.getRestaurant(3)).toEqual(undefined);
  });

  it("Should reject a restaurant from being added if it doesn't have the correct property", async () => {
    FavoriteRestaurantIdb.putRestaurant({ aProperty: "property" });

    expect(await FavoriteRestaurantIdb.getAllRestaurants()).toEqual([]);
  });

  it("Can return all of the restaurants that have been added", async () => {
    FavoriteRestaurantIdb.putRestaurant({ id: 1 });
    FavoriteRestaurantIdb.putRestaurant({ id: 2 });

    expect(await FavoriteRestaurantIdb.getAllRestaurants()).toEqual([{ id: 1 }, { id: 2 }]);
  });

  it("Should remove favorite restaurant", async () => {
    FavoriteRestaurantIdb.putRestaurant({ id: 1 });
    FavoriteRestaurantIdb.putRestaurant({ id: 2 });
    FavoriteRestaurantIdb.putRestaurant({ id: 3 });

    await FavoriteRestaurantIdb.deleteRestaurant(1);

    expect(await FavoriteRestaurantIdb.getAllRestaurants()).toEqual([{ id: 2 }, { id: 3 }]);
  });

  it("Should handle request to remove a restaurant even tho the restaurant has not been added", async () => {
    FavoriteRestaurantIdb.putRestaurant({ id: 1 });
    FavoriteRestaurantIdb.putRestaurant({ id: 2 });
    FavoriteRestaurantIdb.putRestaurant({ id: 3 });

    await FavoriteRestaurantIdb.deleteRestaurant(4);

    expect(await FavoriteRestaurantIdb.getAllRestaurants()).toEqual([{ id: 1 }, { id: 2 }, { id: 3 }]);
  });
};

// eslint-disable-next-line import/prefer-default-export
export { itActsAsFavoriteRestaurantModel };
