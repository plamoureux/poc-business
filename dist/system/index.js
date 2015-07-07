System.register(['skyy/metadata/metadata', 'poc-business/business/business-list', 'skyy/web-components/metadata'], function (_export) {
  'use strict';

  var Metadata, BusinessList, ComponentMetadata;
  return {
    setters: [function (_skyyMetadataMetadata) {
      Metadata = _skyyMetadataMetadata.Metadata;
    }, function (_pocBusinessBusinessBusinessList) {
      BusinessList = _pocBusinessBusinessBusinessList.BusinessList;
    }, function (_skyyWebComponentsMetadata) {
      ComponentMetadata = _skyyWebComponentsMetadata.ComponentMetadata;
    }],
    execute: function () {
      BusinessList.moduleId = 'poc-business/business/business-list';
      BusinessList.viewUrl = 'poc-business/business/business-list.html';

      _export('BusinessList', BusinessList);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVua25vd24iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O3VDQUFRLFFBQVE7O3NEQUNSLFlBQVk7O3FEQUNaLGlCQUFpQjs7O0FBTXpCLGtCQUFZLENBQUMsUUFBUSxHQUFHLHFDQUFxQyxDQUFDO0FBQzlELGtCQUFZLENBQUMsT0FBTyxHQUFHLDBDQUEwQyxDQUFDOzs4QkFFMUQsWUFBWSIsImZpbGUiOiJ1bmtub3duIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtNZXRhZGF0YX0gZnJvbSAnc2t5eS9tZXRhZGF0YS9tZXRhZGF0YSc7XG5pbXBvcnQge0J1c2luZXNzTGlzdH0gZnJvbSAncG9jLWJ1c2luZXNzL2J1c2luZXNzL2J1c2luZXNzLWxpc3QnO1xuaW1wb3J0IHtDb21wb25lbnRNZXRhZGF0YX0gZnJvbSAnc2t5eS93ZWItY29tcG9uZW50cy9tZXRhZGF0YSc7XG5cbi8qXG52YXIgbWV0YWRhdGEgPSBNZXRhZGF0YS5vbihCdXNpbmVzc0xpc3QpLmFkZChDb21wb25lbnRNZXRhZGF0YSk7XG5tZXRhZGF0YS5tb2R1bGVJZCA9ICdwb2MtYnVzaW5lc3MvYnVzaW5lc3MvYnVzaW5lc3MtbGlzdCc7XG4qL1xuQnVzaW5lc3NMaXN0Lm1vZHVsZUlkID0gJ3BvYy1idXNpbmVzcy9idXNpbmVzcy9idXNpbmVzcy1saXN0JztcbkJ1c2luZXNzTGlzdC52aWV3VXJsID0gJ3BvYy1idXNpbmVzcy9idXNpbmVzcy9idXNpbmVzcy1saXN0Lmh0bWwnO1xuXG5leHBvcnQge0J1c2luZXNzTGlzdH07Il19