class CultivationFieldFormManager {
  constructor() {
    this.form = document.getElementById("js-cultivation-field-form");

    this.editContainers = this.form.querySelectorAll(
      ".js-cultivation-field-edit"
    );
    this.showContainers = this.form.querySelectorAll(
      ".js-cultivation-field-show"
    );

    this.longitudeInput = document.getElementById(
      "js-cultivation-field-longitude"
    );
    this.latitudeInput = document.getElementById(
      "js-cultivation-field-latitude"
    );
    this.locationName = document.getElementById(
      "js-cultivation-field-location-name"
    );
    this.locationNameLabel = document.getElementById(
      "js-field-location-name-label"
    );

    this.nameInput = document.getElementById("js-cultivation-field-name");
    this.cropSelect = document.getElementById("js-cultivation-field-crop");
    this.fyiChangeCrop = document.getElementById("js-fyi-change-crop");

    this.initializeFormState();

    this.cropSelect?.addEventListener("change", (event) => {
      this.handleShowFyiChangeCrop(
        event.target.value !== this.initialState.crop
      );
    });
  }

  initializeFormState() {
    this.initialState = this.getFormState();
  }

  getFormState() {
    return {
      name: this.nameInput.value,
      crop: this.cropSelect?.value,
      longitude: this.longitudeInput.value,
      latitude: this.latitudeInput.value,
      locationName: this.locationName.value,
      locationNameLabel: this.locationNameLabel.innerText,
    };
  }

  restoreFormState() {
    this.nameInput.value = this.initialState.name;
    this.cropSelect && (this.cropSelect.value = this.initialState?.crop);
    this.longitudeInput.value = this.initialState.longitude;
    this.latitudeInput.value = this.initialState.latitude;
    this.locationName.value = this.initialState.locationName;
    this.locationNameLabel.innerText = this.initialState.locationNameLabel;
  }

  toggleEditing(isEditing) {
    this.showContainers.forEach((container) =>
      container.classList.toggle("d-none", isEditing)
    );
    this.editContainers.forEach((container) =>
      container.classList.toggle("d-none", !isEditing)
    );

    this.longitudeInput.toggleAttribute("readonly", !isEditing);
    this.latitudeInput.toggleAttribute("readonly", !isEditing);

    if (!isEditing) this.restoreFormState();
  }

  handleShowFyiChangeCrop(isShowFyi) {
    this.fyiChangeCrop.classList.toggle("d-none", !isShowFyi);
  }
}
