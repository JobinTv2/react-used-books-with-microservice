import React, { useEffect, useState } from 'react';
import tw from 'twin.macro';
import { Form, Input } from 'antd';
import { FormikHandlers, FormikErrors } from 'formik';
import { getBookForm } from '../../../lib/api/API';
import { BookForm } from './types';

interface Props {
  handleChange: FormikHandlers['handleChange'];
  errors: FormikErrors<{
    name: string;
    title: string;
    description: string;
    category: string;
    is_sold: boolean;
    owner_id: number;
    author: string;
    rating: number;
    reviews: string;
    price: number;
  }>;
}
export const TradeBookForm: React.FC<Props> = (props) => {
  const { handleChange, errors } = props;
  const [data, setData] = useState<BookForm | null>(null);
  useEffect(() => {
    (async () => {
      try {
        const response = await getBookForm();
        setData(response);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <Container>
      <Form layout="vertical" className="w-full">
        {data?.items?.[0].fields.inputs.map((item) => {
          const field = data?.includes.Entry.find(
            (el) => el.sys.id === item.sys.id
          );
          return (
            <Form.Item
              key={item.sys.id}
              label={field?.fields.name}
              className="font-sans font-semibold"
            >
              <Input
                placeholder={field?.fields?.placeholder}
                name={field?.fields.name?.toLowerCase()}
                onChange={handleChange}
                status={
                  Object.prototype.hasOwnProperty.call(
                    errors,
                    String(field?.fields.name)?.toLowerCase()
                  )
                    ? 'error'
                    : ''
                }
              />
            </Form.Item>
          );
        })}
      </Form>
    </Container>
  );
};

const Container = tw.div``;
