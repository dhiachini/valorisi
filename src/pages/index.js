import Head from 'next/head';
import { subDays, subHours } from 'date-fns';
import { Box, Container, Unstable_Grid2 as Grid } from '@mui/material';
import { Layout as DashboardLayout } from 'src/layouts/dashboard/layout';
import { OverviewBudget } from 'src/sections/overview/overview-budget';
import { OverviewLatestOrders } from 'src/sections/overview/overview-latest-orders';
import { OverviewLatestProducts } from 'src/sections/overview/overview-latest-products';
import { OverviewSales } from 'src/sections/overview/overview-sales';
import { OverviewTasksProgress } from 'src/sections/overview/overview-tasks-progress';
import { OverviewTotalCustomers } from 'src/sections/overview/overview-total-customers';
import { OverviewTotalProfit } from 'src/sections/overview/overview-total-profit';
import { OverviewTraffic } from 'src/sections/overview/overview-traffic';

const now = new Date();

const Page = () => (
  <>
    <Head>
      <title>
      Valorisi
      </title>
    </Head>
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 8
      }}
    >
      <Container maxWidth="xl">
        <Grid
          container
          spacing={3}
        >
          <Grid
            xs={12}
            sm={6}
            lg={3}
          >
            <OverviewBudget
              difference={12}
              positive
              sx={{ height: '100%' }}
              value="3.5 tonnes"
            />
          </Grid>
          <Grid
            xs={12}
            sm={6}
            lg={3}
          >
            <OverviewTotalCustomers
              difference={16}
              positive={false}
              sx={{ height: '100%' }}
              value="5.43 tonnes"
            />
          </Grid>
          <Grid
            xs={12}
            sm={6}
            lg={3}
          >
            <OverviewTasksProgress
              sx={{ height: '100%' }}
              value={75.5}
            />
          </Grid>
          <Grid
            xs={12}
            sm={6}
            lg={3}
          >
            <OverviewTotalProfit
              sx={{ height: '100%' }}
              value="22.46 tonnes"
            />
          </Grid>
          <Grid
            xs={12}
            lg={8}
          >
            
            <OverviewSales
              chartSeries={[
                {
                  name: 'Ce mois-ci',
                  data: [18, 16, 5, 8, 3, 14, 14, 16, 17, 19, 18, 20]
                },
                {
                  name: 'Le mois dernier',
                  data: [12, 11, 4, 6, 2, 9, 9, 10, 11, 12, 13, 13]
                }
              ]}
              sx={{ height: '100%' }}
            />
          </Grid>
          <Grid
            xs={12}
            md={6}
            lg={4}
          >
            <OverviewTraffic
              chartSeries={[58, 42]}
              labels={['Déchets', 'à_recycler']}
              sx={{ height: '100%' }}
            />
          </Grid>
          <Grid
            xs={12}
            md={6}
            lg={4}
          >
           
            <OverviewLatestOrders
              orders={[
                {
                  id: 'f69f88012978187a6c12897f',
                  ref: 'Bizerte',
                  qte: '0.48 tonnes',
                  amount: 30.5,
                  customer: {
                    name: '2.4 tonnes'
                  },
                  createdAt: 1555016400000,
                  status: '20%'
                },
                {
                  id: '9eaa1c7dd4433f413c308ce2',
                  ref: 'Sejnène',
                  qte: '0.43 tonnes',
                  amount: 25.1,
                  customer: {
                    name: '1.8 tonnes'
                  },
                  createdAt: 1555016400000,
                  status: '24%'
                },
                {
                  id: '01a5230c811bd04996ce7c13',
                  ref: 'Manzel Bourguiba',
                  qte: '0.56 tonnes',
                  amount: 10.99,
                  customer: {
                    name: '0.51 tonnes'
                  },
                  createdAt: 1554930000000,
                  status: '35%'
                },
                {
                  id: '1f4e1bd0a87cea23cdb83d18',
                  ref: 'Tinja',
                  qte: '1.66 tonnes',
                  amount: 96.43,
                  customer: {
                    name: '3.78 tonnes'
                  },
                  createdAt: 1554757200000,
                  status: '44%'
                },
                {
                  id: '9f974f239d29ede969367103',
                  ref: 'Ghar el melh',
                  qte: '2.17 tonnes',
                  amount: 32.54,
                  customer: {
                    name: '3.46 tonnes'
                  },
                  createdAt: 1554670800000,
                  status: '63%'
                },
                {
                  id: 'ffc83c1560ec2f66a1c05596',
                  ref: 'Aousja',
                  qte: '0.21 tonnes',
                  amount: 16.76,
                  customer: {
                    name: '1.28 tonnes'
                  },
                  createdAt: 1554670800000,
                  status: '17%'
                },
                {
                  id: '9f974f239d29ede969367103',
                  ref: 'Menzel jemil',
                  qte: '2.5 tonnes',
                  amount: 32.54,
                  customer: {
                    name: '4.74 tonnes'
                  },
                  createdAt: 1554670800000,
                  status: '45%'
                },
                {
                  id: '9f974f239d29ede969367103',
                  ref: 'Menzel abderrahmene',
                  qte: '0.9 tonnes',
                  amount: 32.54,
                  customer: {
                    name: '1.19 tonnes'
                  },
                  createdAt: 1554670800000,
                  status: '72%'
                },
                {
                  id: '9f974f239d29ede969367103',
                  ref: 'El Alia',
                  qte: '0.56 tonnes',
                  amount: 32.54,
                  customer: {
                    name: '5.69 tonnes'
                  },
                  createdAt: 1554670800000,
                  status: '12%'
                },
                {
                  id: '9f974f239d29ede969367103',
                  ref: 'Ras Jebel',
                  qte: '1.56 tonnes',
                  amount: 32.54,
                  customer: {
                    name: '3.64 tonnes'
                  },
                  createdAt: 1554670800000,
                  status: '32%'
                },
                {
                  id: '9f974f239d29ede969367103',
                  ref: 'Metline',
                  qte: '3.5 tonnes',
                  amount: 32.54,
                  customer: {
                    name: '5.43 tonnes'
                  },
                  createdAt: 1554670800000,
                  status: '67%'
                },
                {
                  id: '9f974f239d29ede969367103',
                  ref: 'Raf Raf',
                  qte: '0.55 tonnes',
                  amount: 32.54,
                  customer: {
                    name: '1.46 tonnes'
                  },
                  createdAt: 1554670800000,
                  status: '32%'
                },
                {
                  id: '9f974f239d29ede969367103',
                  ref: 'Utique',
                  qte: '2 tonnes',
                  amount: 32.54,
                  customer: {
                    name: '4.12 tonnes'
                  },
                  createdAt: 1554670800000,
                  status: '48%'
                },
                {
                  id: '9f974f239d29ede969367103',
                  ref: 'Joumine',
                  qte: '0.4 tonnes',
                  amount: 32.54,
                  customer: {
                    name: '1.3 tonnes'
                  },
                  createdAt: 1554670800000,
                  status: '39%'
                },
                {
                  id: '9f974f239d29ede969367103',
                  ref: 'Ghezela',
                  qte: '2.56 tonnes',
                  amount: 32.54,
                  customer: {
                    name: '3.26 tonnes'
                  },
                  createdAt: 1554670800000,
                  status: '80%'
                },
                {
                  id: '9f974f239d29ede969367103',
                  ref: 'Hchechna',
                  qte: '1.8 tonnes',
                  amount: 32.54,
                  customer: {
                    name: '3.12 tonnes'
                  },
                  createdAt: 1554670800000,
                  status: '63%'
                },
              ]}
              sx={{ height: '100%',width:'280%' }}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  </>
);

Page.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);

export default Page;
