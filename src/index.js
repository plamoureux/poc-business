import {Metadata} from 'skyy/metadata/metadata';
import {BusinessList} from 'poc-business/business/business-list';
import {ComponentMetadata} from 'skyy/web-components/metadata';

/*
var metadata = Metadata.on(BusinessList).add(ComponentMetadata);
metadata.moduleId = 'poc-business/business/business-list';
*/
BusinessList.moduleId = 'poc-business/business/business-list';
BusinessList.viewUrl = 'poc-business/business/business-list.html';

export {BusinessList};