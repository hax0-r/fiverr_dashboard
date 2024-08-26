import React from 'react';
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbList,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Link } from 'react-router-dom';
import PhotoGrid from '@/components/Property/PhotoGrid';

const AddProperty = () => {
    return (
        <>
            <div className="">
                <Breadcrumb>
                    <BreadcrumbList>
                        <BreadcrumbItem>
                            <Link to="/property" className='text-muted-foreground'>Property List</Link>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator className="scale-150 mx-1" />
                        <BreadcrumbItem>
                            <Link to="/property/add-property" className='text-blue'>Add Property</Link>
                        </BreadcrumbItem>
                    </BreadcrumbList>
                </Breadcrumb>

                <div className="">
                    <PhotoGrid/>
                </div>
                
            </div>
        </>
    );
};

export default AddProperty;
